import Home from "../views/Home.vue"
// import About from "../views/About.vue"
import { name } from '../../package.json'

let prefix = window.__POWERED_BY_QIANKUN__ ? `/micrApp/${name}` : "/";
 
const routers =  [
  {
    path: prefix,
    name: "Home",
    component: Home
  },
  {
    path: `${prefix}/about`,
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
  ]

export default routers;
