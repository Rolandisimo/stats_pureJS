var path = require('path');
var projectRoot = __dirname;

var config = {
  // Must be an absolute path or watching feature will fail
  context: path.join(projectRoot, 'app'),
  entry: './index.js',
  output: {
    path: path.join(projectRoot, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
        { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'},
        { test: /\.css$/, loader: 'style!css'},
    ],
  },
  resolveLoader: {
    root: [
      path.join(projectRoot, 'node_modules'),
    ],
  },
  resolve: {
    root: [
      path.join(projectRoot, 'node_modules'),
    ],
  },
};
module.exports = config;
