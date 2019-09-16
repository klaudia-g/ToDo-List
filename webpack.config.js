const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'public/javascripts'),
    filename: 'bundle.js'
  },


module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [ 'babel-loader' ]
          },

         {
            test: /\.css$/,
            use: [ 'style-loader',MiniCssExtractPlugin.loader, 'css-loader' ]
        }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "../stylesheets/styles.css"
    })
  ]
};