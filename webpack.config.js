const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const WebpackShellPlugin = require('webpack-shell-plugin');

const contextReplacementPlugin = new webpack.ContextReplacementPlugin(
    // The (\\|\/) piece accounts for path separators in *nix and Windows
    /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
    root('./src'), // location of your src
    {} // a map of your routes
);

const commonChunksPlugin = new webpack.optimize.CommonsChunkPlugin({
    name: "commons",
    // (the commons chunk name)

    filename: "commons.js"
    // (the filename of the commons chunk)

    // minChunks: 3,
    // (Modules must be shared between 3 entries)

    // chunks: ["pageA", "pageB"],
    // (Only use these entries)
});

const copyPlugin = new CopyWebpackPlugin([{
    from: './docs/public',
    to: '../'
}]);

const shellPlugin = new WebpackShellPlugin({
    onBuildStart: [
        'echo Start build',
        'rm -rf documentation',
        'npm run compodoc'
    ],
    onBuildEnd: [
        'echo End build'
    ]
});

/**
 * Env
 * Get npm lifecycle event to identify the environment
 */
var ENV = process.env.npm_lifecycle_event;
var isTestWatch = ENV === 'test-watch';
var isTest = ENV === 'test' || 'karma' || isTestWatch;
var isProd = ENV === 'build';

const plugins = [];

console.log('>>>>> ', process.env.npm_lifecycle_event, ' <<<<<');

if(!isTest) plugins.push(shellPlugin);
plugins.push(copyPlugin);
if(!isTest) plugins.push(commonChunksPlugin);
plugins.push(contextReplacementPlugin);


module.exports = {
    devtool: 'source-map',

    entry: {
        polyfills: './resource/polyfills',
        vendor: './resource/vendor',
        app: './src/app/components.module',
        docs: './docs/samples/docs.module'
    },

    output: {
        path: path.resolve(__dirname, "documentation/example/assets"),
        publicPath: "/example/assets/",
        filename: "[name].bundle.js",
        sourceMapFilename: '[name].map',
        chunkFilename: '[id].chunk.js'
    },

    resolve: {
        extensions: ['.ts', '.js'],
        modules: [
            'node_modules'
        ]
    },


    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader'],
                exclude: [isTest ? /\.(e2e)\.ts$/ : /\.(spec|e2e)\.ts$/, /node_modules\/(?!(ng2-.+))/]
            }, {
                test: /\.html$/,
                loader: 'raw-loader',
                exclude: root('src', 'public')
            }
        ]
    },

    plugins: plugins,

    devServer: {
        contentBase: './documentation',
        inline: true,
        port: 3000
    }
};

// Helper functions
function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [__dirname].concat(args));
}
