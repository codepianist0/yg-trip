import YGrequest from "../request"

export  function getHotSuggests() {
  return YGrequest.get({
    url: "/home/hotSuggests"
  })
}
