module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    rules: {
        'semi': 'error',
        'quotes': ['error', 'single', {'allowTemplateLiterals': true}],
        'jsx-quotes': ['error', 'prefer-single'],
        '@typescript-eslint/no-explicit-any': 'off'
    }
};
