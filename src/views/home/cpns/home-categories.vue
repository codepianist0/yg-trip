<script setup>
  import { storeToRefs } from "pinia";

  import useHomeStore from "@/stores/modules/home"

  const homeStore = useHomeStore()

  // 分类
  const { categories } = storeToRefs(homeStore)


</script>


<template>
  <div class="categories">
    <template v-for="item, index in categories.data" :key="index">
      <div class="item" >
        <img :src="item.pictureUrl" alt="">
        <div>{{item.title}}</div>
      </div>
    </template>
  </div>
</template>

<style lang="less" scoped>
  .categories {
    display: flex;
    overflow-x: auto;
    margin-top: 5px;
    padding: 0 15px;
    font-size: 12px;
    &::-webkit-scrollbar {
    display: none;
    }
    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      width: 70px;
      height: 80px;
      text-align: center;
      img {
      width: 32px;
      height: 32px;
      }
    }
  }

</style>