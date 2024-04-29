<script setup>
import sectionSlot from "@/components/detail-section/detial-section.vue"
import { defineProps } from "vue";

const props = defineProps({
  houseFacility: {
    type: Object,
    default: () => {}
  }
})

</script>


<template>
  <div class="facility">
    <section-slot title="房屋设施" more="查看全部设施">
      <template v-for="value, index in houseFacility.houseFacilitys" :key="index">
        <div class="item"
          v-if="houseFacility.facilitySort?.includes(index)"
        >
          <div class="left">
            <img class="icon" :src="value.icon" alt="">
            <span class="text">{{ value.groupName }}</span>
          </div>
          <div class="right">
            <div class="iten" v-for="iten in value.facilitys.slice(0,4)">
              <i class="icon"></i>
              <span class="text">{{ iten.name }}</span>
            </div>
          </div>
        </div>
      </template>
    </section-slot>
  </div>
</template>

<style lang="less" scoped>
  .item {
    display: flex;
    margin: 25px 0;
    font-size: 12px;
    height: 45px;
    .left {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 90px;
      .icon {
        margin-bottom: 5px;
        width: 20px;
        height: 20px;
      }
    }
    .right {
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-left: 18px;
      .iten {
        display: flex;
        align-items: center;
        width: 50%;
        .icon {
          display: block;
          width: 12px;
          height: 12px;
          background: url("@/assets/img/detail/icon_check.png") 0 0/ 100% 100% ;
        }
      }
    }
  }


</style>