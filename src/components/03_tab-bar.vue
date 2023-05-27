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
        <van-tabbar-item :to="item.path" icon="home-o">
          <span>{{ item.text }}</span>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<style lang="less" scoped>
  .tab-bar {
    // 方式：在单独的component中修改
    // --van-tabbar-item-font-size: 5.3333vw;
    // 修改它的类:不会生效
    // 因为组件有自己的作用域
    // 如果需要穿透进去修改，需要使用deep()
    ::v-deep(.van-tabbar-item__icon) {
      font-size: 50px;
    }

  }


</style>