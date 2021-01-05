import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';

import {ReactKeycloakProvider} from '@react-keycloak/web';
import {createKeycloakStub} from './tests/keycloak.mock';

import {AppRouter} from './Router';

// Mock keycloak hook
let mockInitialized = false;
const mockKeycloakStub = createKeycloakStub();
jest.mock('@react-keycloak/web', () => {
    const originalModule = jest.requireActual('@react-keycloak/web');
    return {
        ...originalModule,
        useKeycloak: () => {
            return {
                initialized: mockInitialized,
                keycloak: mockKeycloakStub
            };
        }
    };
});

test('app router - keycloak not initialized', () => {
    const {getByRole} = render(
        <ReactKeycloakProvider authClient={mockKeycloakStub}>
            <AppRouter/>
        </ReactKeycloakProvider>
    );
    expect(getByRole('progressbar')).toBeInTheDocument();
});

test('app router - keycloak initialized', () => {
    mockInitialized = true;

    const {getByText, getByRole} = render(
        <ReactKeycloakProvider authClient={mockKeycloakStub}>
            <AppRouter/>
        </ReactKeycloakProvider>
    );
    expect(getByText('JWT with Keycloak')).toBeInTheDocument();
    expect(getByText('You are currently not logged in')).toBeInTheDocument();
    expect(getByRole('alert')).toBeInTheDocument();
});
