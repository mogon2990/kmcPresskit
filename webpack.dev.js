const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  // devServer: {
  //   contentBase: './dist'
  // }
  devServer: {
    contentBase: __dirname + "/public",
    compress: true,
    port: 9000,
    historyApiFallback: true,
  },
});
