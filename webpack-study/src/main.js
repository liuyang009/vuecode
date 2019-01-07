//这个main.js 是我们项目的js入口文件

// 1 导入jquery
// import *** from ***  是es6中导入模块的方式
// 由于es6的代码 太高级了， 浏览器解析不了。所以 这一行执行会报错~
import $ from 'jquery'

$(function(){
    $('li:odd').css('backgroundColor', 'red');
    $('li:even').css('backgroundColor', 'blue');
});



// 使用 webpack-dev-server这个工具，来实现自动打包编译的功能
// 1 运行： npm i webpack-dev-server -D 把这个工具安装到项目的本地开发依赖
// 2 安装完毕后， 这个工具的用法和 webpack命令的用法 完全一样。
// 3 由于 我们是在项目中 本地安装的webpack-dev-server 所以 无法把它当做脚本命令，在powershell终端中直接运行（只有那些 安装到 全局 -g的工具 才能在终端中正常执行）
// 4 webpack-dev-server帮我们打包生成的bundle.js文件 并没有存放到实际的物理磁盘上 而是直接托管到了电脑内存中
//所以 我们在项目跟目录中 根本找不到 这个打包好的 bundle.js