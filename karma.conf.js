var path = require('path');

var webpackConfig = require('./webpack.config');

var ENV = process.env.npm_lifecycle_event;
var isTestWatch = ENV === 'test-watch';

module.exports = function (config) {
    var _config = {

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine', 'karma-typescript'],

        // list of files / patterns to load in the browser
        files: [
            {pattern: './karma-shim.js', include: true, watched: false}
        ],

        // list of files to exclude
        exclude: [
            '**/*.d.ts'
        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            './karma-shim.js': ['webpack', 'sourcemap']
        },

        webpack: webpackConfig,

        webpackMiddleware: {
            // webpack-dev-middleware configuration
            // i. e.
            stats: 'errors-only'
        },

        webpackServer: {
            noInfo: true // please don't spam the console when running in karma!
        },

        // test results reporter to use
        // possible values: 'dots', 'progress', 'mocha'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['mocha', 'karma-typescript'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true
    };

    if (!isTestWatch) {
        _config.reporters.push('coverage');
        _config.coverageReporter = {
            dir: 'build/coverage/unit/',
            reporters: [
                {type: 'json', subdir: 'json', file: 'coverage-final.json'},
                {type: 'lcovonly', subdir: 'lcov', file: 'coverage.dat'}
            ]
        };

        _config.reporters.push('junit');
        _config.junitReporter = {
            outputDir: 'build/tests/unit/',
            outputFile: 'unit-test-report.xml',
            useBrowserName: false
        };
    }

    config.set(_config);

    config.plugins.push([
        'karma-junit-reporter'
    ]);
};
