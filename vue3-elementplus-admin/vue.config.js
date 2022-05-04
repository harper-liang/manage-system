const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: './', // 为项目的所有资源指定一个基础路径
  outputDir: 'dist', // 构建时的输出目录
  devServer: {  // 前端应用和后端API服务器没有运行到同一个主机上，需要将API请求代理到API服务器
  },
  configureWebpack: {
    resolve: {
        alias: {
            '@': resolve('src')
        }
    }
},
}