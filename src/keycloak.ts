export const keycloakConfig = {
    url: 'http://localhost:8080/auth/',
    realm: 'react',
    clientId: 'react-app'
};

export const keycloakInitConfig = {
    onLoad: 'check-sso'
};
