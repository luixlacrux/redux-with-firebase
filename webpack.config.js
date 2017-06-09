module.exports = {
  devtool: 'inline-source-map',
  entry: __dirname + '/src/App.jsx',
  output: {
    path: '/build',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  resolveLoader: {
     moduleExtensions: ["-loader"]
  }
}
