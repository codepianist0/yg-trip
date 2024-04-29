import YGrequest from "../request"

export  function getHotSuggests() {
  return YGrequest.get({
    url: "/home/hotSuggests"
  })
}

export function getCategories() {
  return YGrequest.get({
    url: "/home/categories"
  })
}
export function getHouseList(currentPage) {
  return YGrequest.get({
    url: "home/houselist",
    params: {
      page: currentPage
    }
  })
}
