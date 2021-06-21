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

  VueRouter = createRouter({
    base: window.__POWERED_BY_QIANKUN__ ? routerBase : process.env.BASE_URL,
    history: createWebHashHistory(),
    routes: routes
  })

  instance = app.use(VueRouter).mount(container ? container.querySelector("#app") : "#app")
}


if (window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
} else {
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
  instance.$destroy();
  instance.$el.innerHTML = ""; // 子项目内存泄露问题
  instance = null;
}