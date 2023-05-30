import { defineStore } from "pinia"
import {getHotSuggests} from "@/service"

const useHomeStore = defineStore("home", {
  state:() => ({
    hotSuggestsCity: {}
  }),
  actions: {
    async getHotSuggestsData() {
      const res = await getHotSuggests()
      this.hotSuggestsCity = res.data
    }

  }
})

export default useHomeStore