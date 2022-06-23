const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const SoundsPlugin = require('sounds-webpack-plugin')

module.exports = {
    entry: [
        './src/app.js',
        './src/scss/application.scss',
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
          {
            test: /.s?css$/,
            use: [
                MiniCssExtractPlugin.loader,
                { loader: "css-loader" },
                { loader: "sass-loader" },
            ],
          },
          {
            test: /\.wav$/,
            loader: 'file-loader'
          }
        ],
        
      },
      optimization: {
        minimizer: [
          new CssMinimizerPlugin(),
        ],
        minimize: true,
      },
        plugins: [
            new HTMLPlugin({
                filename: 'index.html',
                template: './src/index.html'
            }),
            new MiniCssExtractPlugin({
                filename: 'style.min.css',
                ignoreOrder: true
            }),
            new SoundsPlugin(),
        ],
    mode: 'development'
};