<script setup>
  import { computed, defineProps, ref } from "vue"
  import detailSection from "@/components/detail-section/detial-section.vue"

  const props = defineProps({
    commentModule: {
      type: Object,
      default: () => ({})
    }
  })
  
  const more = computed(() => {
    return `查看全部${props.commentModule.totalCount}评论`
  })


</script>


<template>
  <div class="comment">
    <detailSection title="热门评论" :more='more'>
      <div class="header">
        <div class="left">
          <div class="score">
            <span class="text">{{ commentModule.overall }}</span>
            <div class="line"></div>
          </div>
          <div class="infos">
            <div class="scoreTitle item">{{ commentModule.scoreTitle }}</div>
            <div class="totalCount item">{{ commentModule.totalCount }}条评论</div>
            <div class="start item">
              <van-rate 
              v-model="commentModule.overall" 
              :size="10"  
              :count="5"
              readonly 
              allow-half
              color="#ff9854"
            />
            </div>
          </div>
        </div>
        <div class="right">
          <span 
            class="subscore" 
            v-for="item, index in commentModule.subScores" :key="index"
          >
            {{ item }}
          </span>
        </div>
      </div>
      <div class="tags">
        <span class="tag" 
          v-for="item, index in commentModule.commentTagVo" :key="index"
          :style="{color: item.color, backgroundColor: item.backgroundColor}"
        >
          {{ item.text }}
        </span>
      </div>
      <div class="content">
        <div class="user">
          <img :src="commentModule.comment.userAvatars" alt="">
          <div class="info">
            <div class="name">{{ commentModule.comment.userName }}</div>
            <span class="date">{{ commentModule.comment.checkInDate }}</span>
          </div>
        </div>
        <span class="message">{{ commentModule.comment.commentDetail }}</span>
      </div>
    </detailSection>
  </div>
</template>

<style lang="less" scoped>
.comment {
  font-size: 12px;
  .header {
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
    .left {
      flex: 1;
      display: flex;
      .score {
        display: flex;
        flex-direction: column;
        font-size: 48px;
        font-weight: 700;
        .text {
          height: 48px;
        }
        .line {
          width: 66px;
          height: 6px;
          border-radius: 3px;
          background: linear-gradient(90deg, #fa8c1d, #fcaf3f);
        }
      }
      .infos{
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 15px;
        .item {
          margin-top: 5px;
        }
      }
    }
    .right {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row-reverse;
      align-content: space-between;
      width: 180px;
      .subscore {
        margin-left: 6px;
        color: #666;
      }
    }
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    margin: 10px 0;
    .tag {
      padding: 2px 5px;
      margin: 3px 3px;
    }
  }
  .content {
    padding: 10px;
    margin-bottom: 20px;
    background-color: #f7f9fb;
    .user {
      display: flex;
      margin: 15px 0;
      img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
      }
      .info {
        margin-left: 5px;
        .name {
          font-size: 14px;
          color: #000;
        }
        .date {
          display: inline-block;
          margin-top: 4px;
          color: #666;
        }

        
      }
    }
  }
}

</style>