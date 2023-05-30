<script setup>
  import tabBar from "./components/tab-bar.vue"

  // import { useRoute } from "vue-router";

  // const router = useRoute()

</script>


<template>
  <div class="app">
    <router-view />
    <!-- <tab-bar v-if="!router.meta.hideTabbar" /> -->
    <tab-bar />
  </div>
</template>

<style lang="less" scoped>
  

</style>