const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.[fullhash].js',
        path: path.resolve(__dirname, 'build')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon: './public/favicon.ico',
            hash: true
        }),
        new CopyWebpackPlugin({
            patterns: [
                './public/android-chrome-192x192.png',
                './public/android-chrome-512x512.png',
                './public/apple-touch-icon.png',
                './public/favicon-16x16.png',
                './public/favicon-32x32.png',
                './public/manifest.json',
                './public/robots.txt'
            ],
        }),
        new ESLintPlugin({
            context: 'src',
            extensions: ['js','ts','tsx']
        }),
    ],
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.(png|jpe?g|gif|woff|woff2|eot|ttf|svg)$/i,
                use: 'url-loader'
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    devServer: {
        contentBase: './public',
        port: 3000,
        historyApiFallback: true,
        watchContentBase: true,
        progress: true,
        open: true
    }
};
