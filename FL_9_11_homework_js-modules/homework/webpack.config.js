const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/output-module.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: { loader: 'css-loader', options: { minimize: true } }
          })
        }
      ]
    },
    plugins: [
      new UglifyJsPlugin({ uglifyOptions: { output: { comments: false } } }),
      new ExtractTextPlugin('styles.css'),
      new HtmlWebpackPlugin({ template: './src/index.html' })
    ]
};