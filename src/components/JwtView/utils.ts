const tokenIndex = 1;
const identLength = 4;

const decodeToken = (token?: string): string => {
    if (!token) {
        return 'N/A';
    }

    const base64Url = token.split('.')[tokenIndex];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.stringify(JSON.parse(window.atob(base64)), null, identLength);
};

export {decodeToken};
