const path =require('path');

// 引入html 插件
const  HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const {resolve} = require("./webpack.config");
module.exports = {
    // 指定入口文件
    entry: './src/index.ts',
    // 指定打包文件所在的目类
    output: {
        // 指定打包文件目录
        path: path.resolve(__dirname,'dist'),
        filename: "bundle.js"
    },
    // 指定webpack打包使用的模块
    module: {
        rules: [
            {
                //test 指定的规则生效的文件
                test: /\.ts$/,
                use:'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    plugins:[
        new HTMLWebpackPlugin({
            template:'./src/index.html'
        }),
        new CleanWebpackPlugin()
    ],
    //用来设置引入模块
    resolve:{
      extensions:['.js', '.ts']
    },
    mode: 'development',
}

