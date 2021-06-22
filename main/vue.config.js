module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  runtimeCompiler: true,
  productionSourceMap: false,
  devServer: {
    port: 9000
  }
}
