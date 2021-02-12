const path = require('path');

module.exports = {

  entry: './src/index.js',
  // -----------------------------------------------------
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
 // -----------------------------------------------------
  mode: 'development',
 // -----------------------------------------------------
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
  // -----------------------------------------------------
      {
        test: /.(css|scss)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
      },
    ],
  },
 // -----------------------------------------------------
  devServer: {
    publicPath: '/build/',
  },
};