import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  registerMicroApps,
  start,
  initGlobalState
} from 'qiankun'

createApp(App)
  .use(store)
  .use(router)
  .mount('#main')

// 注册微应用并启动：
registerMicroApps([
  {
    name: 'vue3', // 微应用的名称，微应用之间必须确保唯一。
    entry: '//localhost:9002', // 必选，微应用的入口。
    container: '#subapp-container', // 必选，微应用的容器节点的选择器或者 Element 实例。
    activeRule: '/vue3' // 必选，微应用的激活规则。
  },
  {
    name: 'vue2',
    entry: '//localhost:9003',
    container: '#subapp-container',
    activeRule: '/vue2'
  },
  {
    name: 'purehtml',
    entry: '//localhost:7104',
    container: '#subapp-container',
    activeRule: '/purehtml'
  }
])

// 主应用创建共享状态：
const { onGlobalStateChange, setGlobalState } = initGlobalState({
  user: 'qiankun'
})

onGlobalStateChange((value, prev) =>
  console.log('[onGlobalStateChange - master]:', value, prev)
)

setGlobalState({
  ignore: 'master',
  user: {
    name: 'master'
  }
})

/**
 * Step3 设置默认进入的子应用
 */
// setDefaultMountApp('/vue3')

// 启动 qiankun
start()
