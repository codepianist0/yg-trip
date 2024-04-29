<script setup>
  import { defineProps } from 'vue';

  const props = defineProps({
    topModule: {
      type: Object,
      default: () => ({})
    }
  })


</script>


<template>
  <div class="infos">
    <!-- name -->
    <h2 class="name">{{ topModule.houseName }}</h2>
    <!-- tags -->
    <div class="tags">
      <template v-for="item in topModule.houseTags">
        <div 
          class="tag-item"
          :style="{color: item.tagText?.color, background: item.tagText?.background.color}"
          v-if="item.tagText"
        >{{ item.tagText?.text }}</div>
      </template>
    </div>
    <!-- comment -->
    <div class="comment section">
      <div class="left">
        <span class="overall">{{ topModule.commentBrief.overall }}</span>
        <span class="scoreTitle">{{ topModule.commentBrief.scoreTitle }}</span>
        <span class="commentBrief">{{ topModule.commentBrief.commentBrief }}</span>
      </div>
      <div class="right"> {{ 37 }}条评论 &gt; </div>
    </div>
    <!-- Position -->
    <div class="position section">
      <div class="left">
        <span class="info">{{ topModule.nearByPosition.address }}</span>
      </div>
      <div class="right">地图 周边 &gt;</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.infos {
  padding: 16px;
  .name {
    font-size: 20px;
    color: #333;
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    margin: 10px 0;
    .tag-item {
      padding: 1px 3px;
      margin-right: 5px;
      font-size: 12px;
    }
  }
  .section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    margin: 20px 0;
    font-size: 12px;
    background-color: #f3f3f3;
    .right {
      color: var(--primary-color);
    }
  }
  .comment {
    .overall {
      font-weight: 700;
      font-size: 18px;
    }
    .scoreTitle {
      font-weight: 700;
      margin: 0 3px;
    }
    .commentBrief {
      color: #666;
    }
  }
  .position {
    .info {
      font-size: 14px;
      font-weight: 700;
    }
  }
}

</style>