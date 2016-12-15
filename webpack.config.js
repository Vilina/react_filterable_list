var CopyWebpackPlugin = require('copy-webpack-plugin');
//webpack
//webpack-dev-server http://localhost:8080/webpack-dev-server/
//npm run deploy for updating gh-pages https://vilina.github.io/react_filterable_list/

module.exports = {
    entry: "./scripts/app.js",
    output: {
        filename: "scripts/js/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                }
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            // {output}/to/file.txt
            { from: 'scripts/js/bundle.js', to: 'deploy/scripts/js/' },
            { from: 'css/main.css', to: 'deploy/css' },
            { from: 'index.html', to: 'deploy' }
        ], {
            copyUnmodified: true
        })
    ],
    resolve: {
        extensions: ['', '.js', '.es6']
    }
};

