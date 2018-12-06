module.exports = {
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            },
            {
                test: /test\.js$/,
                use: 'mocha-loader',
                exclude: /node_modules/
            }
        ]
    },
    entry: {
        index: './src/start/index.js',
        tests: './src/start/tests.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    }
};