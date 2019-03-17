const path = require('path');
const pagesPath = path.resolve(__dirname, './views/pages/')
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry:{
        twtter:`${pagesPath}/twitter/index.js`,
        article:`${pagesPath}/article/index.js`
    },
    output:{
        filename:'[name].js',
        path:__dirname + '/dist'
    },
    module:{
        rules:[
            {
                test: /\.ejs$/,
                loader: 'ejs-loader?variable=data'
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: { loader: 'babel-loader' }
            },
            {
                test: /\.less$/,
                use: [{
                       loader: "style-loader" // creates style nodes from JS strings
                    },{
                        loader: "css-loader" // translates CSS into CommonJS
                    },{
                        loader: "less-loader" // compiles Less to CSS
                    }]
            }
        ]
    },
    devServer: {
        contentBase:path.resolve(__dirname,'./dist'),
        // openPage:'/main',
        //服务器的IP地址，可以使用IP也可以使用localhost
        host:'localhost',
        //服务端压缩是否开启
        compress:true,
        //配置服务端口号
        port:9901
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:"twitter",
            template:`${pagesPath}/twitter/index.html`, 
            filename:"twitter.html",
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
            inject:true,
            minify:true,
            hash:true,
            cache:true,
            templateParameters:{
                title:"Article"
            }
        })
    ]
}