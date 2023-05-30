import { defineStore } from "pinia"
import {getCityAll} from "@/service"
import { all } from "axios"

const useCityStore = defineStore("city", {
  state: () => ({
    allCitys: {},
    selectCity: {
      cityName: "玉林"
    },
  }),
  actions: {
    fetchAllCtitieData() {
      // 发送网络请求
      getCityAll().then(res => {
        // 将数据保存到allCitys中
        this.allCitys = res.data
      })
    },
  }
})

export default useCityStore