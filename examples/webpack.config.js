var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: [ '', '.js', '.jsx' ],
    alias: {
      'react-scrolla': path.resolve(__dirname, '../src/ReactScrolla')
    }
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: [ 'react-hot', 'babel' ],
      include: [
        __dirname,
        path.resolve(__dirname, '../src')
      ]
    }]
  }
}
