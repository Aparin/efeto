module.exports = {
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                { loader: 'style-loader' },
                { loader: 'css-loader' }
            ]
        }]
    },
    entry: {
        index: './src/efeto/efeto.js',
        tests: './src/start/tests.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    }
};