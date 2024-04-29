import { defineStore } from "pinia";

const useMainStore = defineStore("main", {
  state: () => ({
    loadingFlag: false
  }),
  actions: {

  }
})

export default useMainStore