const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports=
    {
        entry: './static/src/index.jsx',
        module: {
            loaders: [
                {
                    test: /\.js(x)?$/,
                    loader: 'babel-loader',
                    include: [
                        path.resolve(__dirname, './static/src'),
                        path.resolve(__dirname, './static/src/components'),
                    ],
                    exclude: /node_modules/,
                    query: {
                        presets: ["es2015", "react"]
                    }
                },
                {
                    test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                    loader : 'file-loader'
                },
                {
                    test:/\.css$/,
                    loader: ExtractTextPlugin.extract({
                        fallbackLoader: 'style-loader',
                        loader: 'css-loader',
                    })
                },
                {
                    test: /\.scss$/,
                    loaders: ["style-loader", "css-loader", "sass-loader"]
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
