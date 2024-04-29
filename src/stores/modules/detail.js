import { defineStore } from "pinia";

import { getDetailData } from "@/service"

const useDetailStore = defineStore("detail", {
  state: () => ({
    mainPart:{},
  }),
  actions: {
    async fetchDetailData(houseId) {
      const res = await getDetailData(houseId)
      this.mainPart = res?.data?.mainPart
    }
  }
})

export default useDetailStore