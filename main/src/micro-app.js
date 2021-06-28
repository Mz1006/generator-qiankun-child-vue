const microApps = [
  {
    name: 'vue3', // 微应用的名称，微应用之间必须确保唯一。
    entry: '//localhost:9002', // 必选，微应用的入口。
    container: '#subapp-container', // 必选，微应用的容器节点的选择器或者 Element 实例。
    activeRule: '/vue3', // 必选，微应用的激活规则。
    children:[{   // 子应用路由
      key: 1,
      url: '/vue3',  // 对应主应用路由
      childpath: '/',  // 子应用路由
      childPathDiff: 1, // 子路由组件路径层
      name: 'Home'  // 子应用组件名
    },
    {
      key:2,
      url: '/vue3/About',
      childpath: '/about',
      childPathDiff: 2,
      name: 'About'
    },
    {
      key:3,
      url: '/vue3/Help',
      childpath: '/help',
      childPathDiff: 2,
      name: 'Help'
    },
    {
      key:4,
      url: '/vue3/GoodsList',
      childpath: '/goodsList',
      childPathDiff: 2,
      name: 'GoodsList'
    }]
  },
  {
    name: 'vue2',
    entry: '//localhost:9003',
    container: '#subapp-container',
    activeRule: '/vue2',
    children:[{
      key: 1,
      url: '/vue2',
      name: 'Home'
    },
    {
      key:2,
      url: '/vue2/About',
      name: 'About'
    },
    {
      key:3,
      url: '/vue2/List',
      name: 'List'
    }]
  },
  {
    name: 'purehtml',
    entry: '//localhost:7104',
    container: '#subapp-container',
    activeRule: '/purehtml',
    children:[]
  }
]

const apps = microApps.map(item => {
  return {
    ...item,
    container: '#subapp-container', // 子应用挂载的div
    props: {
      routerApps: microApps
    }
  }
})

export default apps
