const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/js/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'Restaurant Page',
      filename: 'index.html',
      inject: 'head',
      scriptLoading: 'defer'      
    })    
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test:/\.(woff2|woff|ttf)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(jpg|jpeg|png|svg|webp)$/i,
        type: 'asset/resource'        
      }
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  }
}