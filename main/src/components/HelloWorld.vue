<template>
  <div>
    <a-menu theme="dark" mode="inline">
      <div v-for="item in microApps" :key="item.id">
        <a-menu-item v-if="item.children.length === 0" :key="item.id">
          <component :is="item.icon"></component>
          <a :href="item.activeRule">{{item.name}}</a>
        </a-menu-item>
        <a-sub-menu v-else :key="`sub${item.id}`">
          <template #title>
            <span>
              <component :is="item.icon"></component>
              <span>{{item.name}}</span>
            </span>
          </template>
          <a-menu-item v-for="citem in item.children" :key="citem.key">
            <a :href="citem.url">{{citem.title}}</a>
          </a-menu-item>
        </a-sub-menu>
      </div>
    </a-menu>
  </div>
</template>

<script>
import { UserOutlined, FundOutlined, WifiOutlined } from '@ant-design/icons-vue'
import microApps from '../micro-app'
export default {
  name: 'HelloWorld',
  props: {

  },
  components: {
    UserOutlined,
    FundOutlined,
    WifiOutlined
  },
  setup () {
    return {
      microApps
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
a{
  text-decoration: none;
  margin-left: 10px;
}
</style>
