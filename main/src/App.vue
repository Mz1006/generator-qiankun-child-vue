<template>
  <div id="main">
    <Home />
    <div id="subapp-container">
      <router-view />
    </div>
  </div>
</template>
<script>
import Home from '@/views/Home.vue'
export default {
  name: 'main',
  components: {
    Home
  }
}
</script>

<style lang="less">

</style>
