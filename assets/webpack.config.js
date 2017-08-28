const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
    './css/app.css',
    './js/app.js'
  ],

  output: {
    path: path.resolve(__dirname, "../priv/static"),
    filename: 'js/app.js',
  },

  plugins: [
    new CopyWebpackPlugin([{
      from: './static',
      to: path.resolve(__dirname, "../priv/static")
    }]),

    new ExtractTextPlugin({
      filename: "css/app.css",
      allChunks: true
    }),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }, {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ],
  },
}
