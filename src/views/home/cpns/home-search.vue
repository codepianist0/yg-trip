<script setup>
  import { useRouter } from "vue-router"
  import { computed, ref } from 'vue';
  
  import getPosition from '@/utils/getPositon';
  import { formatMontDay, getDiffDays } from "@/utils/formatday"

  import useCityStore from '@/stores/modules/city';
  import useHomeStore from "@/stores/modules/home"
  import { storeToRefs } from "pinia";

  const router = useRouter()
  // 获取当前位置
  function getPositionClick() {
    getPosition()
  }

  // 点击切换到city
  function getCityClick() {
    router.push("/city")
  }

  // 获取返回的数据
  const cityStore = useCityStore()
  const currentCity = computed(() => cityStore.selectCity.cityName)

  // 获取格式化时间
  let nowDate = new Date()
  let newDate = new Date()
  newDate.setDate(nowDate.getDate() + 1)
  let startDay = ref(formatMontDay(nowDate))
  let endDay = ref(formatMontDay(newDate))
  let dateCount = ref(getDiffDays(nowDate, newDate))
  // 选择日期
  const show = ref(false)
  function onConfirm(value) {
    const nowDate = value[0]
    const newDate = value[1]
    startDay.value = formatMontDay(value[0])
    endDay.value = formatMontDay(value[1])
    dateCount = getDiffDays(nowDate, newDate)
    show.value = false
  }

  // 获取热门推荐城市
  const homeStore = useHomeStore()
  homeStore.getHotSuggestsData()
  const { hotSuggestsCity } = storeToRefs(homeStore)

</script>


<template>
  <div class="home-search">
    <!-- 定位 -->
    <div class="location section">
      <span class="city" @click="getCityClick">{{ currentCity }}</span>
      <div class="position" @click="getPositionClick">
        <span>我的位置</span>
        <img class="position-icon" src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>
    <!-- 日期 -->
    <div class="date-range section" @click="show = true">
      <div class="start-day day-info">
        <span>入住</span>
        <div class="date">{{ startDay }}</div>
      </div>
      <div class="range">共{{ dateCount }}晚</div>
      <div class="leave-day day-info">
        <span>离店</span>
        <div class="date">{{ endDay }}</div>
      </div>
    </div>
    <van-calendar 
      v-model:show="show" 
      type="range" 
      @confirm="onConfirm" 
      :show-confirm="false"
      color="#ff9854"
    />
    <!-- 价格/人数选择 -->
    <div class="price-couter section">
      <span class="price item">价格不限</span>
      <span class="couter item">人数不限</span>
    </div>
    <!-- 关键字 -->
    <div class="keyword section">
      <span>关键字/位置/民俗名</span>
    </div>
    <!-- 热门推荐 -->
    <div class="hot-suggests">
      <template v-for="item,index in hotSuggestsCity" :key="index">
        <span class="hot-item">{{ item.tagText.text }}</span>
      </template>
    </div>

  </div>
</template>

<style lang="less" scoped>

  .section {
    height: 44px;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    border-bottom: 2px solid #F5f5f5;
    color: #999;
  }
  .location {
      line-height: 44px;
      font-size: 16px;    
      .city {
        flex: 1;
        color: #222;
      }
      .position {
        width: 76px;
        font-size: 12px;
        color: #333;
        .position-icon {
          position: relative;
          margin-left: 1px;
          top: 4px;
          width: 18px;
        }
      }
    }
  .date-range {
    font-size: 12px;
    .day-info {
      width: 90px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
    .range {
      flex: 1;
      padding-left: 40px;
      line-height: 44px;
    }

    .date {
      font-size: 16px;
      color: #000;
    }
    .leave-day {
      width: 76px;
    }

  }
  .price-couter {
    line-height: 44px;
    .couter {
      width: 76px;
    }
  }
  .keyword {
    line-height: 44px;
  }
  .hot-suggests {
    display: flex;
    flex-wrap: wrap;
    padding: 5px 15px;
    .hot-item {
      height: 20px;
      line-height: 1;
      padding: 4px 8px;
      margin: 4px;
      border-radius: 14px;
      box-sizing: border-box;
      font-size: 12px;
      background-color: rgba(255, 152, 84, .2) ;
    }
  }

</style>