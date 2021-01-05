import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';

import {ReactKeycloakProvider} from '@react-keycloak/web';
import {createKeycloakStub} from './tests/keycloak.mock';

import {AppRouter} from './Router';
import {KeycloakInstance} from 'keycloak-js';

// Mock keycloak hook
const mockKeycloak: {keycloak: KeycloakInstance, initialized: boolean} = {
    keycloak: createKeycloakStub(false),
    initialized: false
};

jest.mock('@react-keycloak/web', () => {
    const originalModule = jest.requireActual('@react-keycloak/web');
    return {
        ...originalModule,
        useKeycloak: () => mockKeycloak
    };
});

test('app router - keycloak not initialized', () => {
    const {getByRole} = render(
        <ReactKeycloakProvider authClient={mockKeycloak.keycloak}>
            <AppRouter/>
        </ReactKeycloakProvider>
    );
    expect(getByRole('progressbar')).toBeInTheDocument();
});

test('app router - keycloak initialized', () => {
    mockKeycloak.initialized = true;

    const {getByText, getByRole} = render(
        <ReactKeycloakProvider authClient={mockKeycloak.keycloak}>
            <AppRouter/>
        </ReactKeycloakProvider>
    );
    expect(getByText('JWT with Keycloak')).toBeInTheDocument();
    expect(getByText('You are currently not logged in')).toBeInTheDocument();
    expect(getByRole('alert')).toBeInTheDocument();
});

test('app router - keycloak initialized & authenticated', () => {
    mockKeycloak.initialized = true;
    mockKeycloak.keycloak = createKeycloakStub(true);

    const {getByText, getByRole} = render(
        <ReactKeycloakProvider authClient={mockKeycloak.keycloak}>
            <AppRouter/>
        </ReactKeycloakProvider>
    );
    expect(getByText('JWT with Keycloak')).toBeInTheDocument();
    expect(getByText('Your decoded token')).toBeInTheDocument();
    expect(getByRole('alert')).toBeInTheDocument();
});

test('app router - keycloak initialized & authenticated with token', () => {
    const token = 'xxx.eyJyb2xlIjpbImFkbWluIl0sIm5hbWUiOiJUZXN0IiwicHJlZmVycmVkX3VzZXJuYW1lIjoidGVzdCIsImdpdmVuX25hbWUiOiJUZXN0IiwiZmFtaWx5X25hbWUiOiJUZXN0IiwianRpIjoiMDQzNDgwMGUtNmUyMC00MTIxLTg4MmMtYmMxZmE1NGU3NDY4IiwiaWF0IjoxNjA5NzI0MTEzLCJleHAiOjE2MDk3Mjc3MTN9.xxx';
    mockKeycloak.initialized = true;
    mockKeycloak.keycloak = createKeycloakStub(true, token);

    const {getByText, getByRole} = render(
        <ReactKeycloakProvider authClient={mockKeycloak.keycloak}>
            <AppRouter/>
        </ReactKeycloakProvider>
    );
    expect(getByText('JWT with Keycloak')).toBeInTheDocument();
    expect(getByText('Your decoded token')).toBeInTheDocument();
    expect(getByText(/"preferred_username": "test"/ui)).toBeInTheDocument();
    expect(getByRole('alert')).toBeInTheDocument();
});
