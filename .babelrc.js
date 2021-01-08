module.exports = function (api) {
    api.cache(true);

    return {
        presets: [
            [
                '@babel/preset-env',
                {
                    'targets': '> 0.25%',
                    'useBuiltIns': 'usage',
                    'corejs': 3
                }
            ],
            '@babel/preset-react',
            [
                '@babel/preset-typescript',
                {
                    'allExtensions': true,
                    'isTSX': true
                }
            ]
        ],
        plugins: [
            [
                '@babel/plugin-proposal-class-properties',
                {
                    'loose': false
                }
            ],
            '@babel/plugin-proposal-object-rest-spread'
        ]
    };
};
