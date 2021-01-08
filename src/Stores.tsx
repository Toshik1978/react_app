import * as React from 'react';

import API from './lib/api';
import {RestViewStore, RestViewContext} from './stores/RestViewStore';

export const Stores = ({children}: {children?: React.ReactNode}): JSX.Element => {
    const api = new API('http://localhost:8080/');
    const restViewStore = new RestViewStore(api);

    return (
        <RestViewContext.Provider value={restViewStore}>
            {children}
        </RestViewContext.Provider>
    );
};
