var path = require('path');
var projectRoot = __dirname;

var WebpackConf = {
    // Must be an absolute path or watching feature will fail
    context: path.join(projectRoot, 'app'),
    entry: ['babel-polyfill', './index.js'],
    output: {
        path: path.join(projectRoot, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015', 'stage-0']
                }
            }, {
                test: /\.css$/,
                loader: 'style!css'
            }
        ]
    },
    resolveLoader: {
        root: [path.join(projectRoot, 'node_modules')]
    },
    resolve: {
        root: [path.join(projectRoot, 'node_modules')]
    }
};
module.exports = WebpackConf;
