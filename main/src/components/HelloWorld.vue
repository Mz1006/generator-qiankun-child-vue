<template>
  <div>
    <a-menu theme="dark" :default-selected-keys="['1']" mode="inline">
      <div v-for="item in microApps" :key="item.name">
        <a-menu-item :key="item.name" v-if="item.children.length === 0">
          <fund-outlined />
          <a :href="item.activeRule">{{item.name}}</a>
        </a-menu-item>
        <a-sub-menu :key="item.name" v-else>
          <template #title>
            <span>
              <user-outlined />
              <span>{{item.name}}</span>
            </span>
          </template>
          <a-menu-item v-for="citem in item.children" :key="item.key">
            <a :href="citem.url">{{citem.name}}</a>
          </a-menu-item>
        </a-sub-menu>
      </div>
    </a-menu>
  </div>
</template>

<script>
import { UserOutlined, FundOutlined, WifiOutlined } from '@ant-design/icons-vue';
import microApps from '../micro-app'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    UserOutlined,
    FundOutlined,
    WifiOutlined
  },
  setup(){
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
