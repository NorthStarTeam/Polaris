const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, './polaris'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    publicPath: '/polaris/',
    watchContentBase: true,
    historyApiFallback: true,
    hot: true,
    port: 8080,
    proxy: [
      {
        context: () => true,
        target: 'http://localhost:3000',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
