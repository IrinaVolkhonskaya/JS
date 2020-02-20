const path = require ('path');
const WebpackBar = require('webpackbar');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const webpackMerge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const loadModeConfig = env => require(`./build-utils/${env.mode}.config`)(env);

//console.log ("DIRNAME: ", __dirname, 'dist');//получаем абсолютный путь к файлу

module.exports = env => 
  webpackMerge({
        mode: env.mode,
        context: path.resolve(__dirname, 'src'),
        entry: './index.js',
        output: {
            path: path.resolve(__dirname,'dist'),
            filename:'bundle.js'
        },
        module: { //загрузчики
            rules:[
                {
                test: /\.js$/,
                exclude: /node_modules/, 
                use: ["babel-loader"] 
            },
            { 
                test: /\.hbs$/, use: "handlebars-loader" 
            },
              {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      name: '[path]/[name].[ext]',
                      limit: 5000
                    }
                  }
                ]
              },
              {
                test: /\.html$/i,
                use: 'html-loader',
              },
            ] 
        },
        plugins: [
            new WebpackBar(),
            new CleanWebpackPlugin(),
            new FriendlyErrorsWebpackPlugin()]
    },loadModeConfig(env)
    );
  