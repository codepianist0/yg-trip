import YGrequest from "../request"

// 调用这个函数,返回的是一个promise
export function getCityAll() {
  return YGrequest.get({
    url: "city/all"
  })
}
