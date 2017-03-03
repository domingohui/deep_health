const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports=
    {
        entry: './src/index.jsx',
        module: {
            loaders: [
                {
                    test: /\.js(x)?$/,
                    loader: 'babel-loader',
                    include: [
                        path.resolve(__dirname, './src'),
                        path.resolve(__dirname, './src/components'),
                    ],
                    exclude: /node_modules/,
                    query: {
                        presets: ["es2015", "react"]
                    }
                },
                {
                    test: /.(png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/,
                    loader: 'url-loader?limit=10000'
                },
                {
                    test:/\.css$/,
                    loader: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        loader: 'css-loader',
                    })
                },
                {
                    test: '/materialize-css/bin/',
                    loader: 'imports?jQuery=jquery,$=jquery,hammerjs'
                    // Imports loader to resolve the global jquery symbol
                },
                {
                    test: /\.scss$/,
                        loaders: 'style-loader!css-loader!sass-loader!resolve-url-loader!sass-loader?sourceMap'
                },
            ],
        },
        output: {
            filename: 'bundle.js',
            path: __dirname + '/static/build/',
            publicPath: "/static/"
        },
        plugins: [
            new ExtractTextPlugin('styles.css'),
        ],
        resolve: {
            extensions: [".css", ".js", ".jsx"]
        } 
    };
