// 封装自己的axios
import axios from "axios"

import { BASE_URL, TIMEOUT } from "./config"

class YGrequest {
  // 设置构造函数
  constructor(baseURL, timeout = 10000) {
    this.instance = axios.create({
      baseURL,
      timeout
    })
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