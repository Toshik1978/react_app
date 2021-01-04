import {observable, action, makeObservable} from 'mobx';

class RestViewStore {
    response = '';

    constructor() {
        makeObservable(this, {
            response: observable,
            setResponse: action
        });
    }

    setResponse(response: string): void {
        this.response = response;
    }
}

export default RestViewStore;
