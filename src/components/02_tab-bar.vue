<script setup>
  import tabbarData from "../assets/data/tabbar"
  import { getAssetURL } from "@/utils/load_assets.js"

  import { ref } from "vue";
  import router from "../router";
  
  let currentIndex = ref(0)
  function activeClick(index, item) {
    currentIndex.value = index
    router.push(item.path)
  }

</script>


<template>
  <div class="tab-bar">
    <template v-for="(item, index) in tabbarData" :key="item.text">
      <div 
        class="tab-bar-item"
        @click="activeClick(index, item)"
        :class="{active: index === currentIndex}"
      >
        <img v-if="currentIndex === index" :src="getAssetURL(item.imageActive)">
        <img v-else :src="getAssetURL(item.image)">
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

      &.active {
        color: var(--primary-color);
      }

      img {
        width: 34px;
      }
      .text {
        font-size: 12px;
        margin-top: 2px;
      }
    }
  }

</style>