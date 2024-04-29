<script setup>

import { defineProps } from 'vue';
import detailCection from "@/components/detail-section/detial-section.vue"

const props = defineProps({
  rulesModule: {
    type: Object,
    default: () => ({})
  }
})

</script>


<template>
  <div class="notice">
    <detailCection title="预定须知">
      <template v-for="item, index in rulesModule.orderRules" :key="index">
        <div class="item">
          <span class="title">{{ item.title }}</span>
          <span class="introduction">{{ item.introduction }}</span>
          <span class="tip" v-if="item.tips">查看说明</span>
        </div>
      </template>
    </detailCection>
  </div>
</template>

<style lang="less" scoped>
.notice {
  .item {
    margin: 20px 0;
    font-size: 12px;
    color: #333;
    .title {
      display: inline-block;
      width: 60px;
    }
    .introduction {
      margin-left: 20px;
    }
    .tip {
      float: right;
      color: #000;
    }
  }
}

</style>