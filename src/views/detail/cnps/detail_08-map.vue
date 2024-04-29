<script setup>
  import { defineProps, onMounted, ref } from "vue";
  import detailSection from "@/components/detail-section/detial-section.vue"
  
  const props = defineProps({
    positionModule: {
      type: Object,
      default: () => {}
    }
  })

  const mapRef = ref()

  onMounted(() => {
    let map = new BMapGL.Map(mapRef.value);          // 创建地图实例 
    let point = new BMapGL.Point(props.positionModule.longitude, props.positionModule.latitude);  // 创建点坐标 
    map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别
    var marker = new BMapGL.Marker(point);        // 创建标注   
    map.addOverlay(marker);                     // 将标注添加到地图中

  })
  

</script>


<template>
  <div class="map">
    <detailSection title="位置周边" more="查看更多周边信息">
      <div class="baidu" ref="mapRef"></div>
    </detailSection>
  </div>
</template>

<style lang="less" scoped>
.baidu {
  width: 100%;
  height: 250px;
}

</style>