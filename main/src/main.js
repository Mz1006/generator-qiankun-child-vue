import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import microApps from './micro-app'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import {
  registerMicroApps,
  start,
  initGlobalState
} from 'qiankun'

createApp(App).use(store).use(router).use(Antd).mount('#main')

const config = {
  beforeLoad: [
    app => {
      // console.log('%c before load',
      // 'background:#0f0 ; padding: 1px; border-radius: 3px;  color: #fff',
      // app)
    }
  ], // 挂载前回调
  beforeMount: [
    app => {
      // console.log('%c before mount',
      // 'background:#f1f ; padding: 1px; border-radius: 3px;  color: #fff',
      // app)
    }
  ], // 挂载后回调
  afterUnmount: [
    app => {
      // console.log('%c after unload',
      // 'background:#a7a ; padding: 1px; border-radius: 3px;  color: #fff',
      // app)
    }
  ] // 卸载后回调
}

registerMicroApps(microApps, config)

// 主应用创建共享状态：
const { onGlobalStateChange, setGlobalState } = initGlobalState({
  allRoutes: microApps
})

onGlobalStateChange((value, prev) =>
  console.log('[onGlobalStateChange - master]:', value, prev)
)

setGlobalState({
  allRoutes: microApps
})

/**
 * Step3 设置默认进入的子应用
 */
// setDefaultMountApp('/vue3')

// 启动 qiankun
start()
