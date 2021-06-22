module.exports = {
  devServer: {
    port: 5500,
  },
  // chainWebpack: config => {
  //   config.plugin('html')
  //     .tap((args) => {
  //       args[0].title = 'qiankun-test'
  //       return args
  //     })
  // },
  configureWebpack: {
    externals: {
      // 'vue': 'Vue',
      // 'vue-router': 'VueRouter',
    }
  }
};