<script setup>
  
</script>


<template>
  <div class="tab-bar">
    <div class="tab-bar-item">
      <img src="@/assets/img/tabbar/tab_home.png" alt="">
      <span class="text">首页</span>
    </div>
    <div class="tab-bar-item">
      <img src="@/assets/img/tabbar/tab_favor.png" alt="">
      <span class="text">收藏</span>
    </div>
    <div class="tab-bar-item">
      <img src="@/assets/img/tabbar/tab_order.png" alt="">
      <span class="text">订单</span>
    </div>
    <div class="tab-bar-item">
      <img src="@/assets/img/tabbar/tab_message.png" alt="">
      <span class="text">消息</span>
    </div>
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