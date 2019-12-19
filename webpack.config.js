const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, './bundle'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    publicPath: '/bundle/',
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
        test: /\.(js|jsx)$/,
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
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './client/assets/index.html'),
      filename: 'index.html',
    }),
  ],
};
