<script setup>
  import { useRouter } from 'vue-router';
  import { computed, ref } from 'vue';
  import useCityStore from "@/stores/modules/city"
  import { storeToRefs } from 'pinia';
  import cityGroup from "./cpns/city-group.vue"
  
  // 获取网络数据
  const cityStore = useCityStore() 
  if (cityStore.fristCityFlag) {
    cityStore.fetchAllCtitieData()
    cityStore.fristCityFlag = false
  }

  // 返回按钮
  const router = useRouter()
  function onCancel() {
    router.back()
  }
  // 搜索框
  let searchValue = ref("")

  // 通过store获取到数据
  const { allCitys } = storeToRefs(cityStore)

  // 当前的标签
  const tabActive = ref()
    

</script>


<template>
  <!-- <div class="city top-page"> -->
  <div class="city">
    <div class="top">
      <!-- 搜索框 -->
      <form action="/">
        <van-search
          v-model="searchValue"
          show-action
          placeholder="城市/区域/位置"
          @search="onSearch"
          @cancel="onCancel"
        />
      </form>
      <!-- tabs -->
      <van-tabs class="tab" v-model:active="tabActive" animated color="#ff9854">
        <template v-for="(value, key, index) in allCitys" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <template v-for="value, key, index in allCitys" :key="key">
        <city-group  v-show="tabActive === key" :group-data="value"></city-group>
      </template>
    </div>


  </div>
</template>

<style lang="less" scoped>
  .top {
    .tab {
      position: relative;
      z-index: 9;
    }
  }

  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }

</style>