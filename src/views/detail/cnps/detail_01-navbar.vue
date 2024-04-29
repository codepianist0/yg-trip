<script setup>
  import { useRouter } from 'vue-router';

  const router = useRouter()

  function onClickLeft() {
    router.back()
  }
</script>


<template>
  <div class="navbar">
    <van-nav-bar
      title="房屋详情"
      left-text="途家"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
</template>

<style lang="less" scoped>


</style>