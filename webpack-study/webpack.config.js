const path = require('path');
//启用热更新的第二步
const webpack = require('webpack');

//导入在内存中生成HTML页面的插件
// 只要是插件，都一定要放到 plugins 节点中去
// 这个插件的2个作用： 
// 1 自动在内存中根据指定页面 生成一个内存的页面
// 2 自动 把打包好的bundle.js 追加到页面中去
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: { // 这是配置dev-server命令参数的第二种形式，相对来说 这种方式麻烦一些
    // --open --port 3000 --contentBase src --hot
    open: true, // 自动打开浏览器
    port: 3000, // 设置启动时候的运行端口
    contentBase: 'src', // 指定托管的根目录
    hot: true // 启用热更新 的第一步
  },
  plugins: [ //配置插件的节点
    new webpack.HotModuleReplacementPlugin(), // new一个热更新的模块对象 这是启用热更新的第三步
    new htmlWebpackPlugin({
        template: path.join(__dirname, './src/index.html'), //指定 模版页面，将来会根据指定的页面路径，去生成内存中的页面
        filename: 'index.html' // 指定生成的页面的名称
    }) //创建 一个在内存中 生成html 页面的插件
  ]
};