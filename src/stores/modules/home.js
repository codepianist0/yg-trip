import { defineStore } from "pinia"
import {getHotSuggests, getCategories, getHouseList} from "@/service"

const useHomeStore = defineStore("home", {
  state:() => ({
    hotSuggestsCity: {},
    categories: {},
    houseList: [],
    currentPage: 0,
    fristFlag: true
  }),
  actions: {
    async getHotSuggestsData() {
      const res = await getHotSuggests()
      this.hotSuggestsCity = res.data
    },
    async fatchCategoriesData() {
      const res = await getCategories() 
      this.categories = res
    },
    async fetchHouseListData() {
      this.currentPage++
      const res = await getHouseList(this.currentPage) 
      this.houseList.push(...res.data)
    }

  }
})

export default useHomeStore