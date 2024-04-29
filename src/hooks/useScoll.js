import { onMounted, onUnmounted, ref, watch } from "vue"

import { debounce, throttle } from "underscore"

const isReachBottom = ref(false)



export default function useScoll(element) {

  let el = window
  const scrollTop = ref(0)
  const clientHeight = ref(0)
  const scrollHeight = ref(0)
  // 使用节流
  const listenerEvent = throttle(() => {
    if(!element) {
      scrollTop.value = document.documentElement.scrollTop
      clientHeight.value = document.documentElement.clientHeight
      scrollHeight.value = document.documentElement.scrollHeight
    } else {
      scrollTop.value = el.scrollTop
      clientHeight.value = el.clientHeight
      scrollHeight.value = el.scrollHeight
    }   
    
    if (Math.ceil(scrollTop.value) + clientHeight.value >= scrollHeight.value) {
      console.log("到底部了");
      isReachBottom.value = true
    }
  }, 500)
  
  onMounted(() => {
    if (element) el = element.value
    el.addEventListener("scroll", listenerEvent)
  })

  // 如果离开组件,那么将这个监听事件关闭
  onUnmounted(() => {
    el.removeEventListener("scroll", listenerEvent)
  })

  return {
    scrollTop,
    isReachBottom
  }
}