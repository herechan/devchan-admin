const path = require("path")
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
            use: { loader: 'babel-loader' }
        },
        // {
        //     test: /\.css$/,
        //     // use: [{
        //     //     loader: MiniCssExtractPlugin.loader,
        //     //     options: {
        //     //       // you can specify a publicPath here
        //     //       // by default it use publicPath in webpackOptions.output
        //     //     //   publicPath: '../'
        //     //     }
        //     //   }, 'css-loader',]
        //     use:['style-loader','css-loader']
        // },
        {
            test:/\.css$/,
            use:[
                'style-loader',
                'css-loader'
            ]
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
            test: /\.scss$/,
            use: [
                'vue-style-loader',
                'css-loader',
                'sass-loader',
                {
                    loader: 'sass-resources-loader',
                    options: {
                      resources: path.resolve(__dirname, '../views/assets/common.scss')
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
            loader: "file-loader"
        },
       
        {test:/\.(jpg|png|jpeg|gif)$/,loader:"url-loader"}
]