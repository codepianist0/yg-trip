<script setup>
  import { defineProps } from "vue"

  const props = defineProps({
    swipeData: {
      type: Array,
      default: () => ([])
    }
  })

  // 对数据进行转换
  const swipeGroup = {}

  for (const item of props.swipeData) {
    let valueArray = swipeGroup[item.enumPictureCategory]
    if (!valueArray) {
      valueArray = []  // 创建一个新的数组
      swipeGroup[item.enumPictureCategory] = valueArray  // 然后将数组赋给对象的
    }
    valueArray.push(item)
  }
  // 取出title的：【】
  function getName(name) {
    return name.replace("：", "").replace("】", "").replace("【", "")
  }

  // 获取分类中的index
  const getCategoryIndex = (item) => {
    const valueArray = swipeGroup[item.enumPictureCategory]
    return valueArray.findIndex(data => data === item) + 1
  }

  
</script>


<template>
  <div class="banenr">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <template v-for="(item, index) in swipeData" :key="index">
        <van-swipe-item>
          <img :src="item.url" alt="">
        </van-swipe-item>
      </template>
      <template #indicator="{ active, total }">
        <div class="custom-indicator">
          <template v-for="(value, key, index) in swipeGroup" :key="index">
            <span 
              class="item" 
              :class="{active: swipeData[active]?.enumPictureCategory == key}"
              
            >
              <span class="text">{{ getName(value[0].title) }}</span>
              <span 
                class="content"
                v-if="swipeData[active]?.enumPictureCategory == key"
              >
                <span>{{ getCategoryIndex(swipeData[active]) }}/{{ swipeGroup[key].length }}</span>
              </span>
            </span>
          </template>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<style lang="less" scoped>
  .custom-indicator {
    position: absolute;
    right: 10px;
    bottom: 10px;
    padding: 2px 5px;
    padding-left: 0 ;
    font-size: 12px;
    color: #fff;
    border-radius: 20px;
    background: rgba(0, 0, 0, 0.4);
    .item {
      padding: 0 4px;
      margin-left: 5px;
      border-radius: 20px;
      &.active {
        background-color: #fff;
        color: #333;
      }
    }
  }

  img {
    width: 100%;
  }

</style>