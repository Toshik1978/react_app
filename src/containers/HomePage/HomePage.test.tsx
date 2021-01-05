import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';

import {ReactKeycloakProvider} from '@react-keycloak/web';
import {createKeycloakStub} from '../../tests/keycloak.mock';

import HomePage from './HomePage';

test('home page', () => {
    const {getByText} = render(
        <ReactKeycloakProvider authClient={createKeycloakStub(true)}>
            <HomePage/>
        </ReactKeycloakProvider>
    );
    expect(getByText('JWT with Keycloak')).toBeInTheDocument();
});
