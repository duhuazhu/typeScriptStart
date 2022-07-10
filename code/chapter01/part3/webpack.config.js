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
        filename: "bundle.js",
        //告诉webpack 不使用箭头函数
        environment:{
            arrowFunction: false
        }
    },
    // 指定webpack打包使用的模块
    module: {
        rules: [
            {
                //test 指定的规则生效的文件
                test: /\.ts$/,
                use:[
                    {
                        //置顶加载器
                        loader:'babel-loader',
                        options:{
                            presets:[
                                [
                                    //指定环境的插件
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        // 要兼容的目标游览器
                                        targets:{
                                            "chrome":"58",
                                            "ie":"11",
                                        },
                                        "corejs":"3",
                                        //使用corejs的方式  usage表示按需加载
                                        "useBuiltIns":"usage"
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'
                ],
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

