<script setup>
  import { ref } from "vue"
  import { storeToRefs } from "pinia";
  import { formatMontDay, getDiffDays } from "@/utils/formatday";
  import useDateStore from "@/stores/modules/date.js" 


  const DateStore = useDateStore()

  const {nowDate, newDate, startDay, endDay, dayCount} = storeToRefs(DateStore)
  startDay.value = formatMontDay(nowDate.value)
  endDay.value = formatMontDay(newDate.value)
  dayCount.value = getDiffDays(nowDate.value, newDate.value)

  // 选择日期
  const show = ref(false)
  function onConfirm(value) {
    const nowDate = value[0]
    const newDate = value[1]
    startDay.value = formatMontDay(value[0])
    endDay.value = formatMontDay(value[1])
    dayCount.value = getDiffDays(nowDate, newDate)
    show.value = false
  }

  


</script>


<template>
  <div class="search-bar">
    <div class="content">
      <div class="range-day" @click="show = true">
        <div class=" item">
          <span class="name">住</span>
          <span class="start-day date">{{ startDay }}</span>
        </div>
        <div class="item">
          <span class="name">离</span>
          <span class="end-day date">{{ endDay }}</span>
        </div>
      </div>
      <div class="search">
        <span class="info">关键字/位置/民宿</span>
      </div>
      <div class="right">
        <i class="icon home_sprite"></i>
      </div>
    </div>
    <van-calendar 
      v-model:show="show" 
      type="range" 
      @confirm="onConfirm" 
      :show-confirm="false"
      color="#ff9854"
    />
  </div>
</template>

<style lang="less" scoped>
  .search-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    padding: 16px;
    background-color: #fff;
    font-size: 12px;
    .content {
      display: flex;
      padding: 0 10px;
      height: 45px;
      color: #999;
      background-color: #f2f4f6;
      .range-day {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        .item {
          .date {
            color: #333;
          }
          .end-day {
            &::after {
              display: inline-block;
              content: "";
              margin-left: 3px;
              width: 0;
              height: 0;
              border: 3px solid #666;
              border-color: #fff #666 #666 #fff;
            }
          }
        }
      }
      .search {
        flex: 1;
        padding: 0 8px;
        line-height: 45px;
      }
      .right {
        display: flex;
        align-items: center;
        .icon {
          display: block;
          width: 24px;
          height: 24px;
          background-position: -29px -151px;
        }
      }
    }
  }

</style>