<script setup>
  import { defineProps } from "vue";
  import detailSection from "@/components/detail-section/detial-section.vue"

  const props = defineProps({
    landlordModule: {
      type: Object,
      default: () => ({})
    }
  })

</script>


<template>
  <div class="landlord">
    <detailSection title="房东介绍" more="查看房东主页">
      <div class="top">
        <img class="level" :src="landlordModule.topScroll" alt="">
      </div>
      <div class="header">
        <div class="left">
          <img :src="landlordModule.hotelLogo" alt="">
          <div class="info">
            <span class="name">{{ landlordModule.hotelName }}</span>
            <div class="tag-list">
              <span class="text" 
                v-for="item, index in landlordModule.hotelTags" 
                :key="index"
                :style="{color: item.tagText.color}"
              >
              <span v-if="index != 0"> | </span>
              {{ item.tagText.text }}
              </span>
            </div>
          </div>
        </div>
        <div class="right">
          <span class="contact">联系房东</span>
        </div>
      </div>
      <div class="bottom">
        <div class="item" v-for="item, index in landlordModule.hotelSummary" :key="index">
          <span class="text">{{ item?.title }}</span>
          <span class="introduction">{{ item?.introduction }}</span>
          <span class="tip">{{ item?.tip }}</span>
        </div>
      </div>
    </detailSection>
  </div>
</template>

<style lang="less" scoped>
  .top {
    .level {
      width: 100%;
    }
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 15px 0;
    .left {
      display: flex;
      img {
        width: 54px;
        height: 54px;
      }
      .info {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        margin-left: 8px;
        .name {
          font-weight: 700;
        }
        .text {
          font-size: 12px;

        }
      }
    }
    .right {
      .contact {
        padding: 5px 10px;
        border-radius: 7px;
        color: #fff;
        font-size: 12px;
        background-image: linear-gradient(90deg, #fa8c1d, #fcaf3f);
      }
    }
  }
  .bottom {
    display: flex;
    justify-content: space-between;
    .item {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      margin: 30px 0 20px;
      color: #666;
      font-size: 12px;
      .introduction {
        font-size: 18px;
        margin: 5px 0;
        font-weight: 700;
        color: #333;
      }
    }
  }

</style>