module.exports = function(api) {
    api.cache(true);

    return {
        presets: [
            ['@babel/env', {'targets': '> 0.25%', 'useBuiltIns': 'usage', 'corejs': 3}],
            '@babel/react',
            ['@babel/preset-typescript', {'allExtensions': true, 'isTSX': true}]
        ],
        plugins: [
            ['@babel/plugin-proposal-class-properties', {'loose': false}],
            '@babel/plugin-proposal-object-rest-spread'
        ]
    };
};
