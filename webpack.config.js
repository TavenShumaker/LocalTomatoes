const path = require('path');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.jpg$/,
        use: "url-loader",
      },
      {
        test: /\.jpg$/,
        use: 'file-loader'
      },
    ],
  },
  devServer: {
    // port: 8080,
    publicPath: '/build',
    contentBase: path.resolve(__dirname, 'client/'),
    proxy: {
      '/markets': 'http://localhost:3000',
    },
  }
}