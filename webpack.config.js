var CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: [
        './src/main.jsx'
    ],
    output: {
        path: 'build',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        outputPath: './build/',
        host: '0.0.0.0'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: ['babel-loader'],
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'src/index.html' }
        ])
    ]
};