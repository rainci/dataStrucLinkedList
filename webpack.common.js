const webpack = require("webpack");
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {//入口文件
    app: './src/index.js',
    another: './src/another.js'
  },
  plugins: [//插件
    new CleanWebpackPlugin(),//清理产出文件
    new HtmlWebpackPlugin({//自动生成html
      title: '我是数据结构链表学习页'
    }),
    new webpack.NamedModulesPlugin(),//增加热更新功能
    new webpack.HotModuleReplacementPlugin(),//增加热更新功能
  ],
  module: {//模块
    rules: [
      {
        test: /\.css$/,//解析css文件
        use: [
          'style-loader',
          'css-loader' // translates CSS into CommonJS
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.js$/,//解析js
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }],
        exclude: /node_modules/
      }
    ]
  },
  output: {//输出
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
}