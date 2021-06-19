import Home from "../views/Home.vue"
import About from "../views/About.vue"
 
const VueRouter = [
    {
      path: '/',
      component: Home
    },
    {
      path: '/About',
      component: About
    }
  ]

export default VueRouter;
