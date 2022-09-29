/*global kakao*/

import React, { useEffect } from "react"
//지도
const Map = (props) => {
  useEffect(() => {
    let container = document.getElementById("map")
    let options = {
      center: new kakao.maps.LatLng(
        props.selectedSpot.mapy,
        props.selectedSpot.mapx
      ), //mapy=lat,mapx=lng
      level: 3,
    }
    let map = new kakao.maps.Map(container, options)

    var positions = []

    for (let i = 0; i < props.recommendspot.length; i++) {
      positions.push({
        title: props.recommendspot[i].title,
        latlng: new kakao.maps.LatLng(
          props.recommendspot[i].mapy,
          props.recommendspot[i].mapx
        ),
      })
    }
    // 마커 이미지의 이미지 주소입니다
    var imageSrc =
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"

    // 마커 이미지의 이미지 크기 입니다
    var imageSize = new kakao.maps.Size(24, 35)

    // 마커 이미지를 생성합니다
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize)
    var linePath = []
    for (var i = 0; i < positions.length; i++) {
      // 마커 이미지의 이미지 크기 입니다

      // 마커 이미지를 생성합니다
      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image: markerImage, // 마커 이미지
      })
      linePath.push(
        new kakao.maps.LatLng(
          props.recommendspot[i].mapy,
          props.recommendspot[i].mapx
        )
      )
      marker.setMap(map)
    }

    // 지도에 표시할 선을 생성합니다
    var polyline = new kakao.maps.Polyline({
      path: linePath, // 선을 구성하는 좌표배열 입니다
      strokeWeight: 5, // 선의 두께 입니다
      strokeColor: "#FFAE00", // 선의 색깔입니다
      strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
      strokeStyle: "solid", // 선의 스타일입니다
    })

    // 지도에 선을 표시합니다
    polyline.setMap(map)
    // 마커를 생성합니다
    var markers = new kakao.maps.Marker({
      map: map, // 마커를 표시할 지도
      position: new kakao.maps.LatLng(
        props.selectedSpot.mapy,
        props.selectedSpot.mapx
      ), // 마커를 표시할 위치
      title: props.selectedSpot.title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
      image: markerImage, // 마커 이미지
    })
    markers.setMap(map)
  }, [props])

  return <div id="map"></div>
}

export default Map
