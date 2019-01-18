module.exports = {
  entry: './client/index.js',
  mode: 'development',
  output: {
    path: __dirname + "/public",
    filename: 'bundle.js',
    publicPath: '/',
  },
  devtool: 'source-maps',
  devServer: {
    contentBase: __dirname + "/public",
    compress: true,
    port: 9000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader',],
      }
    ]
  }
}
