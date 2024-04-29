// 封装自己的axios
import axios from "axios"

import { BASE_URL, TIMEOUT } from "./config"
import useMainStore from "@/stores/modules/main"

const mainStore = useMainStore()

class YGrequest {
  // 设置构造函数
  constructor(baseURL, timeout = 10000) {
    this.instance = axios.create({
      baseURL,
      timeout
    })
    // 创建请求拦截和响应拦截
    this.instance.interceptors.request.use(config => {
      mainStore.loadingFlag = true
      return config
    }, err => {
      return err
    }
    )
    this.instance.interceptors.response.use(ref => {
      mainStore.loadingFlag = false
      return ref
    }, err => {
      mainStore.loadingFlag = false
      return err
    }
    )
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance.request(config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }
  get(config) {
    return this.request({
      method: "GET",
      ...config
    })
  }

  post(config) {
    return this.request({
      ...config,
      method: "POST"
    })
  }
}

export default new YGrequest(BASE_URL, TIMEOUT)