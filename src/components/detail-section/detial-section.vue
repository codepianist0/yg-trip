<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: "title"
  },
  more: {
    type: String,
    default: ""
  }
})

</script>


<template>
  <div class="detail-section">
    <div class="header">
      <h2 class="title">{{ title }}</h2>
    </div>
    <slot>

    </slot>
    <div class="footer" v-if="more.length">
      <span class="more">{{ more }} &gt;</span>
    </div>
  </div>
</template>

<style lang="less" scoped>
.detail-section {
  margin-top: 12px;
  padding: 0 15px;
  border-top: 5px solid #f2f3f4;
  .header {
    height: 50px;
    line-height: 50px;
    border-bottom: 2px solid #feee;
  }
  .footer {
    display: flex;
    justify-content: right;
    height: 44px;
    .more {
      line-height: 44px;
      color: var(--primary-color);
      font-weight: 700;
      font-size: 14px;
    }
  }
}

</style>