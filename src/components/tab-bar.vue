<script setup>
  import tabbarData from "../assets/data/tabbar"
  import { getAssetURL } from "@/utils/load_assets.js"


</script>


<template>
  <div class="tab-bar">
    <template v-for="item in tabbarData" :key="item.text">
      <div class="tab-bar-item">
        <img :src="getAssetURL(item.image)" alt="">
        <span class="text">{{ item.text }}</span>
      </div>
    </template>
  </div>
</template>

<style lang="less" scoped>
  .tab-bar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 50px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;

    .tab-bar-item {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      img {
        width: 34px;
      }
    }
  }

</style>