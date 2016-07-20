var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/js/aos.js',
  devtool: 'source-map',
  output: {
    path: './dist',
    publicPath: 'dist/',
    filename: 'aos.js',
    library: 'AOS',
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
