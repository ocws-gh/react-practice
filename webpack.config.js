var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
  {
    context: path.join(__dirname, 'src'),
    entry: {
        style: './js/style.js'
    },
    output: {
        path: __dirname + '/public/js',
        filename: '[name].js'
    },
    module: {
      loaders: [
        {
          test: /\.js[x]?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          query:{
            presets: ['react', 'es2015']
          }
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    }
  },
  {
    context: path.join(__dirname, 'src'),
    entry: {
      style: './sass/style.scss'
    },
    output: {
      path: __dirname + '/public/css',
      filename: '[name].css'
    },
    module: {
      loaders: [
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract(
            {
              fallback: "style-loader",
              use: ["css-loader?-url&sourceMap&minimize!sass-loader?outputStyle=expanded&sourceMap=true&sourceMapContents=true"]
            }
          )
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('[name].css')
    ],
    devtool: 'source-map'
  }
];