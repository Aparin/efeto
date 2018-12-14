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
        efetoNavbar: './src/efeto/efetoNavbar/efetoNavbar.js',
        smm: './src/pages/smm/smm.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    }
};