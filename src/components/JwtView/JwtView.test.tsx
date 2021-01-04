import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';

import {ReactKeycloakProvider} from '@react-keycloak/web';
import {createKeycloakStub} from '../../tests/keycloak.mock';

import JwtView from './JwtView';

const token = 'xxx.eyJyb2xlIjpbImFkbWluIl0sIm5hbWUiOiJUZXN0IiwicHJlZmVycmVkX3VzZXJuYW1lIjoidGVzdCIsImdpdmVuX25hbWUiOiJUZXN0IiwiZmFtaWx5X25hbWUiOiJUZXN0IiwianRpIjoiMDQzNDgwMGUtNmUyMC00MTIxLTg4MmMtYmMxZmE1NGU3NDY4IiwiaWF0IjoxNjA5NzI0MTEzLCJleHAiOjE2MDk3Mjc3MTN9.xxx';

test('jwt view - no token', () => {
    const {getByText} = render(
        <ReactKeycloakProvider authClient={createKeycloakStub()}>
            <JwtView/>
        </ReactKeycloakProvider>
    );
    expect(getByText('N/A')).toBeInTheDocument();
});

test('jwt view - token', () => {
    const {getByText} = render(
        <ReactKeycloakProvider authClient={createKeycloakStub()}>
            <JwtView token={token}/>
        </ReactKeycloakProvider>
    );
    expect(getByText(/"preferred_username": "test"/i)).toBeInTheDocument();
});
