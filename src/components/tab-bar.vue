<script setup>
  import tabbarData from "../assets/data/tabbar"
  import { getAssetURL } from "@/utils/load_assets.js"

  import { ref } from "vue";

  const currentIndex = ref(0)

</script>


<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854">
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
  img {
    height: 26px;
  }

</style>