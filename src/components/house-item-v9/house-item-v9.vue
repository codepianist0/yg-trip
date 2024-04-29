<script setup>
  import { computed, defineProps } from 'vue';

  const props = defineProps({
    itemData: {
      type: Object,
      default:() => ({})
    }
  })
  
  const startCount = computed(() => Number(props.itemData.commentScore))


</script>


<template>
  <div class="item-v9">
    <div class="cover">
      <img :src="itemData.image.url" alt="">
    </div>
    <div class="info">
      <div class="summary">{{ itemData.summaryText }}</div>
      <div class="houseName showTwoRow">{{ itemData.houseName }}</div>
      <div class="assess-price">
        <van-rate 
          v-model="startCount" 
          :size="16"  
          :count="5"
          readonly 
          allow-half
          color="#fff"
        />
        <span class="price">￥{{ itemData.finalPrice }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .item-v9 {
    position: relative;
    width: 170px;
    margin-top: 15px;
    color: #fff;
    .cover {
      img {
        width: 100%;
        height: 100%;
        border-radius: 8px;
      }
    }
    .info {
      position: absolute;
      bottom: 0;
      padding: 8px;
      .summary {
        font-size: 12px;
      }
      .houseName {
        margin: 8px 0;
      }
      .assess-price {
        display: flex;
        justify-content: space-between;
      }
    }
  }

</style>