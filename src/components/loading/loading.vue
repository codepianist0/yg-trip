<script setup>
  import useMainStore from '@/stores/modules/main';

  const mainStore = useMainStore()

  // 点击后loading界面消失
  function hindLodingClick() {
    mainStore.loadingFlag = false
  }

</script>

<template>
  <div 
    class="loading" 
    @click="hindLodingClick"
    v-if="mainStore.loadingFlag"
  >
    <img src="@/assets/img/loading.gif" alt="">
  </div>
</template>

<style lang="less" scoped>
  .loading {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, .3);
    img {
     width: 150px;
     height: 100px;
   }
  }

</style>