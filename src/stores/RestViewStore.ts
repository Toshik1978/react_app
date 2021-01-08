import {createContext} from 'react';
import {observable, action, makeObservable} from 'mobx';

import APIInterface from '../lib/api';

export class RestViewStore {
    api: APIInterface;

    response = '';

    constructor(api: APIInterface) {
        this.api = api;
        makeObservable(this, {
            response: observable,
            handleClick: action
        });
    }

    handleClick(token: string): void {
        (async () => {
            try {
                const res = await this.api.getData(token);
                this.response = res.text;
            } catch (err) {
                this.response = `ERROR: ${err}`;
            }
        })();
    }
}

// eslint-disable-next-line no-undefined
export const RestViewContext = createContext<RestViewStore | undefined>(undefined);
