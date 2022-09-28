/*global kakao*/

import React, { useEffect } from "react"
//지도
const Map = (props) => {
  useEffect(() => {
    let container = document.getElementById("map")
    let options = {
      center: new kakao.maps.LatLng(33.450936, 126.569477),
      level: 3,
    }

    let map = new kakao.maps.Map(container, options)
    console.log(props.selectedSpot)

    var positions = [
      {
        title: "카카오",
        latlng: new kakao.maps.LatLng(33.450705, 126.570677),
      },
      {
        title: "생태연못",
        latlng: new kakao.maps.LatLng(33.450936, 126.569477),
      },
      {
        title: "텃밭",
        latlng: new kakao.maps.LatLng(33.450879, 126.56994),
      },
      {
        title: "근린공원",
        latlng: new kakao.maps.LatLng(33.451393, 126.570738),
      },
    ]
    // for (let i = 0; i < props.recommendspot.length; i++) {
    //   positions.push({
    //     title: props.recommendspot[i].title,
    //     latlng: new kakao.maps.LatLng(
    //       props.recommendspot[i].mapy,
    //       props.recommendspot[i].mapx
    //     ),
    //   })
    // }
    // 마커 이미지의 이미지 주소입니다
    var imageSrc =
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"

    for (var i = 0; i < positions.length; i++) {
      // 마커 이미지의 이미지 크기 입니다
      var imageSize = new kakao.maps.Size(24, 35)

      // 마커 이미지를 생성합니다
      var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize)

      // 마커를 생성합니다
      var markers = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image: markerImage, // 마커 이미지
      })
    }
    markers.setMap(map)
  }, [])

  return <div id="map"></div>
}

export default Map
