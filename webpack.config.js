const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    entry: './src/index.tsx',
    output: {
        filename: 'app.bundle.[fullhash].js',
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
            extensions: ['js', 'ts', 'tsx']
        }),
        new ForkTsCheckerWebpackPlugin({
            eslint: {
                files: './src/**/*.{ts,tsx,js,jsx}'
            }
        }),
        isDevelopment && new ReactRefreshWebpackPlugin(),
        new CleanWebpackPlugin(),
    ].filter(Boolean),
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/u,
                exclude: /node_modules/u,
                use: [
                    {
                        loader: require.resolve('babel-loader'),
                        options: {
                            plugins: [
                                isDevelopment && require.resolve('react-refresh/babel')
                            ].filter(Boolean)
                        }
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/ui,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.(png|jpe?g|gif|woff|woff2|eot|ttf|svg)$/ui,
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
        open: true,
        hot: true
    }
};
