const path = require('path');
const pagesPath = path.resolve(__dirname, './views/pages/')
const rulesConfig = require('./build/webpack.rules')
const pluginsConfig = require('./build/webpack.plugin')
module.exports = {
    entry:{
        twtter:`${pagesPath}/twitter/index.js`,
        article:`${pagesPath}/article/index.js`,
        vue:'vue'
    },
    output:{
        filename:'[name].js',
        path:__dirname + '/dist'
    },
    resolve:{
        alias:{
            '@siderbar':path.resolve(__dirname, './views/widget/siderbar/'),
            '@twitter':path.resolve(__dirname, './views/widget/twitter/'),
            '@assets':path.resolve(__dirname,'./views/assets')
        }
    },
    module:{
        rules:rulesConfig
    },
    devServer: {
        contentBase:path.resolve(__dirname,'./dist'),
        // openPage:'/main',
        //服务器的IP地址，可以使用IP也可以使用localhost
        host:'localhost',
        //服务端压缩是否开启
        compress:true,
        //配置服务端口号
        port:9901,
        hot: true
    },
    plugins:pluginsConfig
}