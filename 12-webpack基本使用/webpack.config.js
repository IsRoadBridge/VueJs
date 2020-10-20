const  path = require('path')

module.exports = {
    //设置入口，指定需要导出的入口文件及目录
    entry: './src/main.js',
    //设置出口，设置指定导出生成的文件和绝对路径
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
}