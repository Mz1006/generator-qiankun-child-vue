import { createApp } from 'vue'
import App from "./App.vue";
import routes from "./router";
import { createRouter,createWebHashHistory } from "vue-router"

const app = createApp(App);

app.config.productionTip = false;

let VueRouter = null;
let instance = null;
function render(props = {}) {
  const { container, routerBase } = props;
  // console.log('vue',window.__POWERED_BY_QIANKUN__,routerBase, process.env.BASE_URL)
  
  console.log('instancevue createRouter')
  VueRouter = createRouter({
    base: window.__POWERED_BY_QIANKUN__ ? routerBase : process.env.BASE_URL,
    history: createWebHashHistory(),
    routes: routes
  })

  instance = app.use(VueRouter).mount(container ? container.querySelector("#app") : "#app")

  console.log('createRouter vue',VueRouter)
  // console.log('instancevue VueRouter',VueRouter)
}


if (window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
  // console.log('vue qiankun运行')
} else {
  // console.log('vue 独立运行')
  render();
}

export async function bootstrap() {}

export async function mount(props) {
  render(props);
}

// 增加 update 钩子以便主应用手动更新微应用
// export async function update(props) {
//   render(props);
// }


export async function unmount() {
  if(!instance){
    instance.$destroy();
  }
  instance.$el.innerHTML = ""; // 子项目内存泄露问题
  instance = null;
  // console.log('instancevue VueRouter unmount',VueRouter)
  // VueRouter = null;
}