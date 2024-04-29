<script setup>
  import { computed, onMounted, ref, watch } from "vue"
  import { useRoute } from "vue-router";
  import { storeToRefs } from "pinia";
  
  import useDetailStore from "@/stores/modules/detail"
  import useScoll from "@/hooks/useScoll";

  import detailNavbar from "./cnps/detail_01-navbar.vue"
  import detailBanner from "./cnps/detail_02-banner.vue"
  import detailInfos from "./cnps/detail_03-infos.vue";
  import detailFacility from "./cnps/detail_04-facility.vue"
  import detailLandlord from "./cnps/detail_05-landlord.vue"
  import detailComment from "./cnps/detail_06-comment.vue"
  import detailNotece from "./cnps/detail_07-notice.vue"
  import detailMap from "./cnps/detail_08-map.vue"
  import detailIntor from "./cnps/detail_09-intor.vue"
  import tabControl from "@/components/tab-control/tab-control.vue";

  const router = useRoute()
  
  // 获取网络数据（传入的数据是houseId，发送网络请求需要传入houseId的参数）
  const detailStore = useDetailStore()
  detailStore.fetchDetailData(router.params.id)

  const { mainPart } = storeToRefs(detailStore)
  
  // tabcontrol操作
  const { scrollTop } = useScoll()
  const showControlBar = computed(() => {
    return scrollTop.value > 150
  })

  // 传入tab-control的数据
  const titles = ["概览", "设施", "房东", "点评", "须知", "周边"]

  const elArray = []

  function getSectionRef(value) {
    elArray.push(value?.$el)
  }
    function tabClick(index) {
    window.scrollTo({
      top: elArray[index].offsetTop - 40,
      behavior: 'smooth'
    });
  }
  // tabcontrol自动切换
  let currentIndex = ref(titles.length-1)
  watch(scrollTop, (newValue)=> {
    for (let i = 0; i < titles.length; i++) {
      let item = elArray[i]
      if(newValue < item.offsetTop - 40) {
        currentIndex = i - 1
        break
      }
    }
  })
  
  

</script>


<template>
  <div class="detail">
    <tab-control 
      :titles="titles" 
      @tabItemClick="tabClick" 
      v-if="showControlBar"
      :index="currentIndex"
      
    />
    <detailNavbar />
    <div v-if="mainPart?.topModule" v-memo="[mainPart]">
      <detailBanner :ref="getSectionRef" :swipe-data="mainPart?.topModule?.housePicture?.housePics"/>
      <detailInfos :top-module="mainPart?.topModule"/>
      <detailFacility :ref="getSectionRef" :house-facility="mainPart.dynamicModule.facilityModule.houseFacility"/>
      <detailLandlord :ref="getSectionRef"  :landlord-module="mainPart.dynamicModule.landlordModule"/>
      <detailComment :ref="getSectionRef" :comment-module="mainPart.dynamicModule.commentModule" />
      <detailNotece :ref="getSectionRef" :rules-module="mainPart.dynamicModule.rulesModule" />
      <detailMap :ref="getSectionRef" :position-module="mainPart.dynamicModule.positionModule" />
      <detailIntor :introductionModule="mainPart.introductionModule" />
    </div> 
    <div class="footer">
      <img src="@/assets/img/detail/icon_ensure.png" alt="">
      <div class="text">渔鸽旅途,永无止境!</div>
    </div>

    
  </div>
</template>

<style lang="less" scoped>
  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 120px;
    img {
      margin-bottom: 12px;
      width: 123px;
    }
    .text {
      color: #666;
      font-size: 12px;
    }
  }

</style>