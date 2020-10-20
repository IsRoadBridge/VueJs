const  path = require('path')

module.exports = {
    //设置入口，指定需要导出的入口文件及目录
    entry: './src/main.js',
    //设置出口，设置指定导出生成的文件和绝对路径
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    //设置导入的loader，css-loader用来打包css，style-loader用来加载样式
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            //对于小于8kb的图片用url-loader,
                            //大于8kb的图片采用file-loader加载，生成新图片到导出目录中
                            limit: 8192,
                            //指定导出目录的图片所在在img目录下保留原名加8位hash，扩展名不变
                            name: 'img/[name].[hash:8].[ext]'
                        }
                    }
                ]
            }
        ],

    }
}