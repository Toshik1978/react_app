module.exports = {
    clearMocks: true,
    coverageDirectory: 'coverage',
    coverageReporters: [
        'text',
        'lcov',
        'cobertura'
    ],
    moduleNameMapper: {
        '^.+\\.(css|scss)$': 'identity-obj-proxy'
    },
};
