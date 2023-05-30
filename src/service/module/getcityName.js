import YGrequest from "../request/index"
export default function getCityName(longitude,latitude) {
  return YGrequest.get({
    url: `https://restapi.amap.com/v3/geocode/regeo?key=5c6c560204a450e996831a1b639a31de&location=${longitude},${latitude}`,
  })
  
}