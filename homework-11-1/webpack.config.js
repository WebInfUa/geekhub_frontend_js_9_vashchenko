'use strict';
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const htmlWebpackPlug = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/build.js',
    publicPath: ''
  },
  devServer: {
    overlay: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.(jpe?g|png|svg)$/i,
        loader: 'file-loader',
        options: {
          publicPath: 'assets/images',
          name: '[name].[ext]',
          outputPath: 'images',
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/styles.css'),
    new htmlWebpackPlug({
      template: path.join(__dirname, 'src', 'index.html'),
      hash: true
    })
  ]
};
