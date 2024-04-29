<script setup>
  import { useRoute } from "vue-router";
  import { watch } from "vue";
  
  import tabBar from "./components/tab-bar.vue"
  import loading from "./components/loading/loading.vue";
  

  const router = useRoute()

</script>


<template>
  <div class="app">
    <router-view />
    <tab-bar v-if="!router.meta.hideTabbar"/>
    <loading />
  </div>
</template>

<style lang="less" scoped>
  

</style>