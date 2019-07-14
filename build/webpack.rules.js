const path = require("path")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
console.log(process.env.NODE_ENV)
module.exports = [
    {
        test: /\.ejs$/,
        loader: 'ejs-loader?variable=data'
    },
    {
        test: /\.m?js$/,
        exclude: (file) => {
            /node_modules/.test(file) &&
                !/\.vue\.js/.test(file) // 确保在node_modules中的vue文件能够被转义
        },
        use: { loader: 'babel-loader' },
    },
    {
        test: /\.less$/,
        use: [
            'vue-style-loader',
            'css-loader',
            'less-loader'
        ]
    },
    {
        test: /\.(sa|sc|c)ss$/,
        use: [
            'css-hot-loader',
            {
                loader: MiniCssExtractPlugin.loader,
                options: {
                    hmr: process.env.NODE_ENV === 'development',
                    reloadAll: true,
                },
            },
            'css-loader',
            'sass-loader',
            
            {
                loader: 'sass-resources-loader',
                options: {
                    resources: path.resolve(__dirname, '../views/assets/common.scss'),
                },
            },
        ]
    },
    {
        test: /\.vue$/,
        loader: 'vue-loader'
    },
    {
        test: /\.(eot|woff|woff2|ttf)([\\?]?.*)$/,
        loader: "url-loader"
    },

    { test: /\.(jpg|png|jpeg|gif)$/, loader: "url-loader" }
]