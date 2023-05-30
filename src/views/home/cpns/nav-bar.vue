<script setup>

</script>


<template>
  <div class="nav-bar">
    <h1 class="logo">
      <a href="#">渔鸽旅途</a>
    </h1>
    <span class="bar-text">渔鸽旅途</span>
  </div>
</template>

<style lang="less" scoped>
  .nav-bar {
    display: flex;
    justify-content: center;
    height: 46px;
    line-height: 46px;
    border-bottom: 2px solid #f2f2f2;
    .logo {
      text-indent: -999px;
      width: 70px;
      background: url("@/assets/img/home/logo.png") no-repeat 0 10px;
      background-size: 100% auto;
    }
    .bar-text {
      color: var(--primary-color);
      font-weight: 600;
      font-size: 16px;
    }

  }

</style>