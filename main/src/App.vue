<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo" />
      <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
        <template v-for="(item,index) in microApps" :key="index">
          <a-menu-item v-if="item.children.length === 0" :key="item.id" @click="jumpRouter(item.activeRule,item.name,'')">
            <component :is="item.icon"></component>
            <span>{{item.name}}</span>
          </a-menu-item>
          <a-sub-menu v-else :key="`sub${item.id}`">
            <template #title>
              <span>
                <component :is="item.icon"></component>
                <span>{{item.name}}</span>
              </span>
            </template>
            <a-menu-item v-for="citem in item.children" :key="citem.key" @click="jumpRouter(citem.url,item.name,citem.title)">
              <span>{{citem.title}}</span>
            </a-menu-item>
          </a-sub-menu>
        </template>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>{{breadcrumbItem}}</a-breadcrumb-item>
        </a-breadcrumb>
        <div id="subapp-container">

        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import { UserOutlined, FundOutlined, WifiOutlined } from '@ant-design/icons-vue'
import { ref } from 'vue'
import microApps from './micro-app'

export default {
  name: 'Main',
  components: {
    UserOutlined,
    FundOutlined,
    WifiOutlined
  },
  data () {
    return {
      collapsed: ref(false),
      selectedKeys: ref([3])
    }
  },
  setup () {
    const breadcrumbItem = ref('vue/home')

    const jumpRouter = (route, name, title) => {
      window.history.pushState(null, null, route)
      breadcrumbItem.value = `${name}/${title}`
    }

    return {
      microApps,
      jumpRouter,
      breadcrumbItem
    }
  }
}
</script>

<style>
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
