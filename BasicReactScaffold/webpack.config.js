const path = require('path');

module.exports = {
  // ----------------- Entry Point --------------------------
  entry: './src/index.js',

  // ----------------- Points to build folder --------------
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },

 // ----------------- Environment ---------------
  mode: 'development',

 // ------------------ Rules --------------------------------
  module: {
    rules: [
      {
  // ------------------ JSX ----------------------------------
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          }
        }
      },
  // -------------------- CSS and SCSS --------------------------
      {
        test: /.(css|scss)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
      },
    ],
  },
 // ------------------- Points to build folder -------------------
  devServer: {
    publicPath: '/build/',
    contentBase: './src',
  },
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};
