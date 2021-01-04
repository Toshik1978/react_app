const decodeToken = (token?: string): string => {
    if (!token) {
        return 'N/A';
    }

    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.stringify(JSON.parse(window.atob(base64)), null, 4);
};

export {decodeToken};
