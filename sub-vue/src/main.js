import './public-path';
import { createApp } from 'vue'
import App from "./App.vue";
import routes from "./router/index";
import { createRouter, createWebHashHistory } from "vue-router"

const app = createApp(App);

app.config.productionTip = false;

let childRouter = null;
let instance = null;
function render(props = {}) {

  // console.log('执行vue render')
  const { container } = props;

  childRouter = createRouter({
    // base: window.__POWERED_BY_QIANKUN__ ? routerBase : process.env.BASE_URL,
    history: createWebHashHistory(),
    routes: routes
  })

  if (window.__POWERED_BY_QIANKUN__) {
    childRouter.beforeEach((to, from, next) => {
      if (!to.path.includes("/micrApp")) {
        next({ path: `/micrApp/${name}${to.path}` });
      } else {
        next();
      }
    });
  }

  instance = app.use(childRouter).mount(container ? container.querySelector("#sub-vue") : "#sub-vue")
}


// if (window.__POWERED_BY_QIANKUN__) {
//   // eslint-disable-next-line
//   __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
// } else {
//   render();
// }

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {}

export async function mount(props) {
  render(props);
}

export async function unmount() {

  // console.log('instance vuetwo', instance) // undefind
  instance.$destroy();
  instance.$el.innerHTML = ""; // 子项目内存泄露问题
  instance = null;
  childRouter = null;
}