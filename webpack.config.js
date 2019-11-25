const path = require('path')

module.exports = {
    mode: process.env.NODE_ENV,
    entry: './client/index.js',
    output: {
        path: path.resolve(__dirname, './polaris'),
        filename: 'bundle.js'
    },
    devServer: {
        publicPath: '/build/',
        hot: true,
        port: 8080,
        proxy: [{
          context: ['/getdata' ,'/newprice'],
          target: 'http://localhost:3000'
          }]
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
                plugins: ["@babel/plugin-transform-runtime"]
              }
            }
          },
          {
              test: /\.css$/,
              use:  ['style-loader', 'css-loader']
          }
        ]
      }
}