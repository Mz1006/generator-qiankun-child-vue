const microApps = [
  {
    name: 'sub-vue',
    entry: process.env.VUE_APP_SUB_VUE,  // 子项目入口
    activeRule: '/#/micrApp/sub-vue'  //子项目在主项目中的路由
  },
  {
    name: 'sub-vuetwo',
    entry: process.env.VUE_APP_SUB_VUETWO,  // 子项目入口
    activeRule: '/#/micrApp/sub-vuetwo'  //子项目在主项目中的路由
  }
]

const apps = microApps.map(item => {
  return {
    ...item,
    container: '#subapp-viewport', // 子应用挂载的div
    props: {
      routerBase: item.activeRule, // 下发基础路由
    }
  }
})

export default apps