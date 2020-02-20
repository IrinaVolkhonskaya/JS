const path = require ('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => ({
    devtool: 'cheap-eval-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader', 'postcss-loader']
              }
        ]
      },
    plugins:[new HtmlWebpackPlugin({ template: './index.html'})],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        compress: true,
        stats:'errors-only',
        noInfo: true,
        quiet: true,
        open: true,
        clientLogLevel: 'warning'
        //port: 4040
      }
});


