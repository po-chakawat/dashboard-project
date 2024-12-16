const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/dashboard-project/'
    : '/',
  chainWebpack: config => {
    config.module
      .rule('js')
      .include
      .add(/node_modules/)
      .end()
      .use('babel-loader')
      .loader('babel-loader')
      .tap(options => {
        return options
      });
  }
});
