import * as React from 'react';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Keycloak from 'keycloak-js';
import {ReactKeycloakProvider} from '@react-keycloak/web';
import {keycloakConfig, keycloakInitConfig} from './keycloak';

import {AppRouter} from './Router';
import {Stores} from './Stores';

const App = (): JSX.Element =>
    <ReactKeycloakProvider
        /* eslint-disable-next-line no-extra-parens */
        authClient={new (Keycloak as any)(keycloakConfig)}
        initOptions={keycloakInitConfig}
    >
        <Stores>
            <AppRouter/>
        </Stores>
    </ReactKeycloakProvider>;

export default App;
