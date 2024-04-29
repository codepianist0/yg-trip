<script setup>
  import { storeToRefs } from 'pinia';
  import { useRouter } from 'vue-router';
  
  import useHomeStore from '@/stores/modules/home';
  import houseItemV9 from "@/components/house-item-v9/house-item-v9.vue"
  import houseItemV3 from "@/components/house-item-v3/house-item-v3.vue"

  const homeStore = useHomeStore()
  const router = useRouter()

  const { houseList } = storeToRefs(homeStore)

  function onDetailClick(data) {
    router.push({
      path: `/detail/${data.houseId}`
    })
  }



</script>


<template>
  <div class="home-content">
    <h2 class="hot-content">热门精选</h2>
    <div class="content-list">
      <template v-for="item in houseList">
        <house-item-v9 
          v-if="item.discoveryContentType === 9"
          :item-data="item.data"
          @click="onDetailClick(item.data)"
          />
          <house-item-v3 
          v-if="item.discoveryContentType === 3" 
          :item-data="item.data"
          @click="onDetailClick(item.data)"
        />
      </template>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .hot-content {
    padding: 0 20px;
  }
  .content-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 15px;
  }

</style>