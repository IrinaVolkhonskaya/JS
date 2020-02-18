const path = require ('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

console.log ("DIRNAME: ", __dirname, 'dist');//получаем абсолютный путь к файлу

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    module: {
        rules:[
            {
            test: /\.js$/,
            exclude: /node_modules/, 
            use: "babel-loader" 
        },
        {
            test: /\.css$/,
            use: [
                'style-loader',
                 MiniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader'
            ]
          }
        ] 
    },
    plugins: [
       
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html', 
            template: './src/index.html',
            inject: true
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
          })
    ],
    devServer: {
        port: 4040
    },
    devtool: 'cheap-eval-source-map'
};