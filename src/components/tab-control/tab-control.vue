<script setup>
  import { defineProps, ref, defineEmits, watch } from 'vue';

  const props = defineProps({
    titles: {
      type: Array,
      default: () => []
    }
  })

  let currentIndex = ref(0)

  const emits = defineEmits(["tabItemClick"])

  function tabItemClick(index) {
    currentIndex.value = index
    emits("tabItemClick", index)
  }



</script>

<template>
  <div class="control">
    <template v-for="(item,index) in titles" :key="index">
      <span 
        class="item" 
        :class="{active: currentIndex === index }"
        @click="tabItemClick(index)"
      >{{ item }}</span>
    </template>
  </div>
</template>

<style lang="less" scoped>
  .control {
    position: fixed;
    z-index: 999;
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    .item {
      flex: 1;
      text-align: center;

      &.active{
        border-bottom: 3px solid var(--primary-color);
      }
    }
  }

</style>