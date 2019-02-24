const webpack = require('webpack')

module.exports = {
  mode: 'production',
  entry: './src/entry.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader', 'resolve-url-loader' ]
      },
      {
        test: /\.scss$/,
        use: [ 'style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader?sourceMap' ]
      },
      {
        test: /\.png$/,
        loader: 'url-loader'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [{
          loader: 'file-loader',
          options: {
            publicPath: 'dist/'
          }
        }]
      }
    ]
  },
  plugins: [
  ]
}
