const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: ['./js/app.js'],
  output: {
    path: path.resolve(__dirname, "../priv/static"),
    filename: 'js/app.js',
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: './static',
      to: path.resolve(__dirname, "../priv/static")
    }]),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
    ],
  },
}
