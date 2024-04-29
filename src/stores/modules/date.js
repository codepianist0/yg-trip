import { defineStore } from "pinia";

const nowDate = new Date()
const newDate = new Date()
newDate.setDate(nowDate.getDate() + 1)

const useDateStore = defineStore("date", {
  state: () => ({
    nowDate: nowDate,
    newDate: newDate,
    startDay: "",
    endDay: "",
    dayCount: 0
  }),
  actions: {

  }
})

export default useDateStore