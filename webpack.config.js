module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      }
    ]
  },
  entry: {
    app: './src/app.js',
    tests: './src/tests.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  }
};