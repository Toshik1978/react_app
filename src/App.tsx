import * as React from 'react';

import {AppRouter} from './Router';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Keycloak from 'keycloak-js';
import {ReactKeycloakProvider} from '@react-keycloak/web';
import {keycloakConfig, keycloakInitConfig} from './keycloak';

const App = (): JSX.Element =>
    <ReactKeycloakProvider
        /* eslint-disable-next-line no-extra-parens */
        authClient={new (Keycloak as any)(keycloakConfig)}
        initOptions={keycloakInitConfig}
    >
        <AppRouter/>
    </ReactKeycloakProvider>;

export default App;
