import { defineStore } from "pinia"
import {getCityAll} from "@/service"

const useCityStore = defineStore("city", {
  state: () => ({
    allCitys: {},
    selectCity: {
      cityName: "玉林"
    },
    fristHotCityFlag: true,
    fristCityFlag: true
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