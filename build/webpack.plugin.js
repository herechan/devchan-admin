const path = require('path');
const pagesPath = path.resolve(__dirname, '../views/pages/')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const proMode = process.env.NODE_ENV === 'production';
const DOMAIN = proMode ?  'https://www.devchan.top/admin' : 'http://127.0.0.1:9901'
const RELEASE_API = proMode ? 'https://www.devchan.top/admin/release' : 'http://127.0.0.1:9902' // 发布系统服务器api
console.log(proMode)
module.exports = [
    new HtmlWebpackPlugin({
        title:"twitter",
        template:`${pagesPath}/twitter/index.html`, 
        filename:"twitter.html",
        chunks:['twitter'],// 当前页面需要的js，entry中定义的名称
        inject:true,
        minify:true,
        hash:true,
        cache:true,
        meta:{
            'Content-Security-Policy': { 'http-equiv': 'Content-Type', 'content': 'text/html; charset=utf-8' },
            // 'charset':"UTF-8"
        },
        templateParameters:{
            title:"Edit Twitter"
        }
    }),
    new HtmlWebpackPlugin({
        title:"twitter",
        template:`${pagesPath}/article/index.html`, 
        filename:"article.html",
        chunks:['article'],
        inject:true,
        minify:true,
        hash:true,
        cache:true,
        meta:{
            'Content-Security-Policy': { 'http-equiv': 'Content-Type', 'content': 'text/html; charset=utf-8' },
        },
        templateParameters:{
            title:"Article"
        }
    }),
    new HtmlWebpackPlugin({
        title:"release",
        template:`${pagesPath}/release/index.html`, 
        filename:"release.html",
        chunks:['release'],
        inject:true,
        minify:true,
        hash:true,
        cache:true,
        meta:{
            'Content-Security-Policy': { 'http-equiv': 'Content-Type', 'content': 'text/html; charset=utf-8' },
        },
        templateParameters:{
            title:"Release Center"
        }
    }),
    new VueLoaderPlugin(),
    new webpack.ProvidePlugin({
        Vue:['vue/dist/vue.esm.js', 'default']
    }),
    new webpack.DefinePlugin({// 定义全局变量
        DOMAIN: JSON.stringify(DOMAIN),
        api:JSON.stringify('http://127.0.0.1:8009/api/admin'),
        RELEASE_API: JSON.stringify(RELEASE_API)
    }),
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: proMode ? '[name].css' : '[name].[hash].css',
        chunkFilename: proMode ? '[id].css' : '[id].[hash].css',
      }),
    //   new webpack.HotModuleReplacementPlugin()
    new CleanWebpackPlugin(),
]