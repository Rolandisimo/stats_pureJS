var WebpackConf = require('./webpack.config.js');

module.exports = function(config) {
    config.set({
        browsers: ['PhantomJS'],
        plugins: [
            'karma-babel-preprocessor', 'karma-jasmine', 'karma-webpack', 'karma-phantomjs-launcher'
        ],
        files: [
            {
                pattern: './spec/*.js',
                watched: false
            }
        ],
        frameworks: ['jasmine'],
        preprocessors: {
            'test-context.js': ['webpack'],
            './spec/*.js': ['babel'],
            babelPreprocessor: {
                options: {
                    presets: ['es2015'],
                    sourceMap: 'inline'
                },
                filename: function(file) {
                    return file.originalPath.replace(/\.js$/, '.es5.js');
                },
                sourceFileName: function(file) {
                    return file.originalPath;
                }
            },
            webpack: WebpackConf,
            webpackServer: {
                noInfo: true
            }
        }
    });
};
