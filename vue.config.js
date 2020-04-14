const webpack = require('webpack');
module.exports = {
  outputDir: 'dist',   //build输出目录
  assetsDir: 'assets', //静态资源目录（js, css, img）
  lintOnSave: false, //是否开启eslint
  devServer: {
      open: false, //是否自动弹出浏览器页面
      host: "localhost", 
      port: '8080', 
      https: false,   //是否使用https协议
      hotOnly: false, //是否开启热更新
      proxy: {
        '/api': {
            target: 'http://193.112.144.210:8082', //API服务器的地址
            //target:'http://localhost:8082',
            ws: true,  //代理websockets
            changeOrigin: true, // 虚拟的站点需要更管origin
            pathRewrite: {   //重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
                '^/api': ''
            }
        }
    },
  },
  configureWebpack: {//引入jquery
    plugins: [
      new webpack.ProvidePlugin({
        $:"jquery",
        jQuery:"jquery",
        "windows.jQuery":"jquery"
      })
    ]
  }
}