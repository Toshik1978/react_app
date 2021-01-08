import superagent from 'superagent';

interface APIInterface {
    getData(token: string): superagent.SuperAgentRequest;
}

class API implements APIInterface {
    url: string;

    constructor(url: string) {
        this.url = url;
    }

    getData(token: string): superagent.SuperAgentRequest {
        const url = new URL('/api', this.url);
        return superagent
            .get(url.toString())
            .set('Authorization', `Bearer ${token}`);
    }
}

export default API;
