<script setup>
  import { defineProps } from "vue"
  const porps = defineProps({
    introductionModule: {
      type: Object,
      default: () => ({})
    }
  })

</script>


<template>
  <div class="intor">
    <h2 class="title">{{ introductionModule.title }}</h2>
    <p class="introduction">{{ introductionModule.introduction }}</p>
  </div>
</template>

<style lang="less" scoped>
  .intor {
    padding: 15px;
    font-size: 12px;
    color: #666;
    .title {
      margin-bottom: 10px;
      font-size: 14px;
      color: #000;
    }
  }

</style>