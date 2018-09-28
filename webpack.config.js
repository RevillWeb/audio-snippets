const {GenerateSW} = require('workbox-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlPluginRemove = require('html-webpack-plugin-remove')

module.exports = {
  // Other webpack config...
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html'
    }),
    new HtmlPluginRemove(/<script.*?src="index.js".*?<\/script>/),
    new GenerateSW()    
  ]
};