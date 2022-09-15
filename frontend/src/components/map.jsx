/*global kakao*/

import React, { useEffect } from "react"
//지도
const Map = () => {
  useEffect(() => {
    let container = document.getElementById("map")
    let options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 3,
    }

    let map = new kakao.maps.Map(container, options)
    let markerPosition = new kakao.maps.LatLng(
      37.365264512305174,
      127.10676860117488
    )
    let marker = new kakao.maps.Marker({
      position: markerPosition,
    })
    marker.setMap(map)
  }, [])

  return (
    <div>
      <div
        id="map"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: -1,
        }}
      ></div>
    </div>
  )
}

export default Map
