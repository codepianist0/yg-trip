import YGrequest from "@/service/request/index"

export function getDetailData(houseId) {
  return YGrequest.get({
    url: "/detail/infos",
    params: {
      houseId
    }
  })
}