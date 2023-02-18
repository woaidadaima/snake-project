const path = require('path')
const HTMLWEBPACKPLUGIN = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {

    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        // environment: {
        //     arrowFunction: false
        // }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    "@babel/preset-env",
                                    {
                                        "targets": {
                                            "chrome": "88",
                                            // "ie": "11"
                                        },
                                        "corejs": "3",
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        // 浏览器兼容插件
                                        "postcss-preset-env",
                                        {
                                            // 每个浏览器最新两个版本
                                            browsers: 'last 2 versions'
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    'less-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        new HTMLWEBPACKPLUGIN({
            template: path.resolve(__dirname, 'src/index.html')
        }),
        new CleanWebpackPlugin()
    ],
    mode: 'production',
    devServer: {
        host: "localhost",
        port: "3000",
        open: true
    }
}