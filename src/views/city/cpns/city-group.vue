<script setup>
  import { computed, defineProps, ref } from 'vue';
  import useCityStore from '@/stores/modules/city';
  import { useRouter } from 'vue-router';

  const router = useRouter()

  const props = defineProps({
    groupData: {
      type: Object,
      default: () => ({})
    }
  })
  // 动态获取indexList
  const indexList = computed(() => {
    const list =  props.groupData.cities.map(item => {
      return item.group
    })
    list.unshift("#")
    return list
  })
  // 选择城市
  function selectCityClick(city) {
    const cityStore = useCityStore()
    cityStore.selectCity = city
    router.back()
  }

</script>


<template>
  <div class="city-group">
    <van-index-bar :index-list="indexList">
      <van-index-anchor index="热门" />
      <div class="hotCitys">
        <template v-for="hotcity, index in groupData?.hotCities" :key="index">
          <div class="hotitem" 
            @click="selectCityClick(hotcity)"
          >{{ hotcity.cityName }}</div>
        </template>
      </div>

      <template v-for="(item, index) in groupData?.cities" :key="index">
        <van-index-anchor :index="item.group" />
        <template v-for="city in item?.cities" :key="city.cityId">
          <van-cell 
            :title="city.cityName" 
            @click="selectCityClick(city)"
          />
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<style lang="less" scoped>
  .hotCitys {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 15px;
    
    .hotitem {
      margin-top: 8px;
      width: 70px;
      height: 28px;
      line-height: 28px;
      border-radius: 28px ;
      text-align: center;
      font-size: 12px;
      background: #fff4ec;
    }
  }


</style>