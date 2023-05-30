import getCityName from "@/service/module/getcityName"

export default function getPosition() {
  function success(position) {
    console.log("当前位置为");
    console.log("latitude: ", position.coords.latitude);
    console.log("longitude", position.coords.longitude);
    // const longitude = position.coords.longitude
    // const latitude = position.coords.latitude
    // getCityName(latitude, longitude).then(res => {
    //   console.log(res);
    // }).catch(err => {
    //   console.log(err);
    // })


  }

  function error() {
    alert('Sorry, no position available.');
  }

  const options = {
    // enableHighAccuracy: true, // 高精度
    maximumAge: 3000,
    timeout: 10000
  };

  return navigator.geolocation.watchPosition(success, error, options);
}
