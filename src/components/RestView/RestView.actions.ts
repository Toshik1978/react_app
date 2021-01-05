import axios from 'axios';

import RestViewStore from './RestView.store';

const fetchBackendData = (store: RestViewStore, token?: string): void => {
    axios
        .get('http://localhost:8080/api', {headers: {Authorization: `Bearer ${token}`}})
        .then((res) => store.setResponse(res.data));
};

export {fetchBackendData};
