const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    plugins: [
        new CleanWebpackPlugin(),
        // new HtmlWebpackPlugin({
        //   title: 'Production'
        // })
    ],
    output: {
        filename: 'adate.module.js',
        path: path.resolve('./dist'),
        chunkFilename: 'adate.module.js',
        library: 'AMap',
        // libraryExport: 'default',
        libraryTarget: 'umd',
        // umdNamedDefine: true,
        globalObject: 'this' // 当为一个libray库的时候必须设置为 this 才可以在各种模式下使用
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
        ]
    }
};