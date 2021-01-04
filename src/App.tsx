import * as React from 'react';

import {AppRouter} from './Router';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Keycloak from 'keycloak-js';
import {ReactKeycloakProvider} from '@react-keycloak/web';
import {keycloakConfig, keycloakInitConfig} from './keycloak';

const App = (): JSX.Element => {
    return (
        <ReactKeycloakProvider
            authClient={Keycloak(keycloakConfig)}
            initOptions={keycloakInitConfig}
        >
            <AppRouter/>
        </ReactKeycloakProvider>
    );
};

export default App;
