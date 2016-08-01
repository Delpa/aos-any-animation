var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/js/aosaa.js',
  devtool: 'source-map',
  output: {
    path: './dist',
    publicPath: 'dist/',
    filename: 'aosaa.js',
    library: 'AOSAA',
    libraryTarget: 'umd',
    sourceMapFilename: '[file].map'
  },
  devServer: {
    contentBase: 'demo/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
}
