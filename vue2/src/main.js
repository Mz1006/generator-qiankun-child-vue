import './public-path'
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router'
import store from './store'

Vue.config.productionTip = false

let router = null
let instance = null
function render (props = {}) {
  const { container } = props

  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/vue2/' : '/',
    mode: 'history',
    routes
  })

  Vue.use(VueRouter)
  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount(container ? container.querySelector('#navvue') : '#navvue')
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap () {
  // console.log('[vue2] vue app bootstraped')
}
export async function mount (props) {
  // console.log('[vue2] props from main framework', props)
  render(props)
}

export async function unmount () {
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
  router = null
}
