<script setup>
  import navBar from './cpns/nav-bar.vue';

</script>


<template>
  <div class="home">
    <nav-bar></nav-bar>
    <div class="banner">
      <img class="banner-img" src="@/assets/img/home/banner.webp" alt="">
    </div>
    <div class="location">
      <span class="city">广州</span>
      <div class="position">
        <span>我的位置</span>
        <img class="position-icon" src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .banner {
    .banner-img {
      width: 100%;
    }
  }
  .location {
    display: flex;
    padding: 0 20px;
    height: 44px;
    line-height: 44px;
    
    .city {
      flex: 1;
    }
    .position {
      width: 76px;
      font-size: 12px;
      .position-icon {
        position: relative;
        margin-left: 1px;
        top: 4px;
        width: 18px;
      }
    }
  }

</style>