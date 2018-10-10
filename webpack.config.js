const path= require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  name: 'Webpack - React',
  entry: ['./src/index.js', './src/styles/main.scss'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "bundle.[hash].js",
    // publicPath: './'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './build',
    open: true,
    port: 9000,
    hot: true,
    inline: true,
    compress: true,
    historyApiFallback: true,
  },
  watch: true,
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
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader'
            }
          ],
        })
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader?name=[name].[hash].[ext]',
            options: {
              outputPath: 'images/'
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          outputPath: 'fonts/',
          name: '[name].[hash:7].[ext]'
        }
    },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin('build'),
    new ExtractTextPlugin({
      filename: 'style.[hash].css',
      allChunks: true,
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
  ]
};