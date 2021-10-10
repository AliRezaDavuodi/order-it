const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   entry:  './src/index.js',
   output: {
     filename: 'js/bundle.js',
     path: path.resolve(__dirname, './dist'),
   },

   plugins: [

     new HtmlWebpackPlugin(
       {
           filename:"index.html",
           template:"./src/index.html"
       }
   )],


   devServer: {
    static: './dist',
  },


  module: {


    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', "css-loader"],
      },
    ],


    rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }
          }
        }
      ]



  },
 };