const path = require('path');
const pagesPath = path.resolve(__dirname, '../views/pages/')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require("webpack")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
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
        templateParameters:{
            title:"Article"
        }
    }),
    new VueLoaderPlugin(),
    new webpack.ProvidePlugin({
        Vue:['vue/dist/vue.esm.js', 'default']
    }),
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "[name].css",
        chunkFilename: "[id].css"
      }),
    //   new webpack.HotModuleReplacementPlugin()
    new CleanWebpackPlugin(),
]