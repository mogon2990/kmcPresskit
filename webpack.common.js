const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/index.js',
  plugins: [
    // new CleanWebpackPlugin(['pub2']),
    // new HtmlWebpackPlugin({
    //   title: 'Production'
    // })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
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
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
    ]
  }
};
