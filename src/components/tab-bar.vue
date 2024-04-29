<script setup>
  import tabbarData from "../assets/data/tabbar"
  import { useRoute } from "vue-router";
  import { getAssetURL } from "@/utils/load_assets.js"

  import { ref, watch } from "vue";

  // 解决bug,当刷新页面的时候,currentIndex为0
  const router = useRoute()
  watch(router, (newRouter) => {
    const index = tabbarData.findIndex((item) => {
      return item.path === newRouter.path
    })
    currentIndex.value = index
    
  })

  const currentIndex = ref(0)
  

</script>


<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854" route>
      <template v-for="(item, index) in tabbarData">
        <van-tabbar-item :to="item.path">
          <span>{{ item.text }}</span>
          <template #icon>
            <img v-if="currentIndex !== index" :src="getAssetURL(item.image)">
            <img v-else :src="getAssetURL(item.imageActive)">
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>

</template>

<style lang="less" scoped>
  .tab-bar {
    padding-bottom: 50px;
  }
  img {
    height: 26px;
  }
</style>