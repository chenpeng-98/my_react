const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/app.jsx',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  // resolve: {
  //   extensions: ['js', 'jsx']
  // },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' },
          { loader: 'eslint-loader' }
        ]
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              // modules: true
            }
          },
          { loader: 'less-loader' }
        ]
      }
    ]
  },
  devServer: {
    contentBase: './dist'
  },
  devtool: 'inline-source-map',
  watch: true
}