<script setup>
  import { watch, ref } from 'vue';
  import navBar from './cpns/nav-bar.vue';
  import homeSearch from "./cpns//home-search.vue"
  import homeBanner from './cpns/home-banner.vue';
  import homeCategories from './cpns/home-categories.vue';
  import homeContent from './cpns/home-content.vue';
  import searchBar from "@/components/search-bar/search-bar.vue"

  import useHomeStore from "@/stores/modules/home"
  import useScoll from "@/hooks/useScoll"

  // 发送网络请求  // 发送网络请求一般在父组件发送，便于管理
  const  HomeStore = useHomeStore()
  
  if (HomeStore.fristFlag) {
    HomeStore.fatchCategoriesData()
    HomeStore.fetchHouseListData()
    HomeStore.fristFlag = false
  }

  // useScoll来监听滚动位置,并在滚动到底部的时候加载数据
  // 监听滚动高度来显示search
  const searchFlag = ref(false)
  const { scrollTop, isReachBottom } = useScoll()
  watch(scrollTop, (newValue) => {
    if (newValue > 500) {
      searchFlag.value = true
    } else {
      searchFlag.value = false
    }
  })
  watch(isReachBottom, (newValue) => {
    if(newValue) {
      HomeStore.fetchHouseListData().then(() => {
        isReachBottom.value = false
      })
      
    }
  })
  



</script>


<template>
  <div class="home">
    <!-- bar -->
    <nav-bar />
    <!-- 轮播图 -->
    <home-banner />
    <!-- 搜索 -->
    <home-search />
    <!-- 分类 -->
    <home-categories />
    <!-- 搜索框 -->
    <keep-alive>
      <search-bar v-if="searchFlag"/>
    </keep-alive>   
    <!-- 内容 -->
    <home-content />
  </div>
</template>

<style lang="less" scoped>
  

</style>