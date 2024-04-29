<script setup>
  import { computed, defineProps } from 'vue';

  const props = defineProps({
    itemData: {
      type: Object,
      default:() => ({})
    }
  })

</script>


<template>
  <div class="item-v3">
    <div class="cover">
      <img :src="itemData.image.url" alt="">
    </div>
    <div class="info">
      <div class="region">
        <img class="position-icon" src="@/assets/img/home/location.png" alt="">
        <span>{{ itemData.location }}</span>
      </div>
      <div class="houseName showTwoRow">{{ itemData.houseName }}</div>
      <div class="summaryText">{{ itemData.summaryText }}</div>
      <div class="price">
        <span class="new-price">￥ {{ itemData.finalPrice }}</span>
        <span class="old-price">￥ {{ itemData.productPrice }}</span>
        <span class="priceTipBadge">{{ itemData?.priceTipBadge?.text }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .item-v3 {
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    width: 170px;
    height: 230px;
    font-size: 12px;
    color: #666;
    .cover {
      width: 100%;
      img {
        width: 100%;
        border-radius: 8px 8px 0 0;
      }
    }
    .info {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      .position-icon {
        width: 12px;
        height: 12px;
      }
      .houseName {
        font-size: 14px;
        color: #333;
      }
      .price {
        .new-price {
        font-size: 14px;
        color: var(--primary-color);
        }
        .old-price {
          text-decoration: line-through;
          vertical-align: top;
        }
        .priceTipBadge {
          padding: 1px 6px;
          color: #fff;
          border-radius: 20px;
          background-image: linear-gradient(90deg, #f66, #ff9f9f);
        }
      }
    }
  }

</style>