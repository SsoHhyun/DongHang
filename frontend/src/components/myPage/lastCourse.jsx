// 지난 여행 코스(탭)
import React from "react"
import { useState } from "react"
import { Box, Button, Paper, styled, Typography } from "@mui/material"
import { useSelector } from "react-redux/es/exports"
import Map from "../map"
//지도

const LastCourse = (props) => {
  const tripInfo = useSelector((state) => state.lastTrips)
  const [level, setLevel] = useState(3)
  const [currentSpot, setCurrentSpot] = useState({
    mapy1: "37.49817473153595",
    mapy2: "37.51783576502551",
    mapx1: "127.03121197537305",
    mapx2: "127.07049421820354",
  })

  const [selectedSpot, setSelectedSpot] = useState({
    title: tripInfo[props.i].placeList[0].title,
    mapy: tripInfo[props.i].placeList[0].mapy,
    mapx: tripInfo[props.i].placeList[0].mapx,
  })
  console.log(tripInfo[props.i].placeList)

  return (
    <LastCourseContainer>
      <MapContainer id="map">
        <Map
          recommendspot={tripInfo[props.i].placeList}
          selectedSpot={selectedSpot}
          setCurrentSpot={setCurrentSpot}
          setSelectedSpot={setSelectedSpot}
          level={level}
          setLevel={setLevel}
        />
      </MapContainer>
      <MySpots></MySpots>
    </LastCourseContainer>
  )
}

export default LastCourse

const LastCourseContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItem: "center",
  width: "50vw",
  height: "74vh",
})

const MapContainer = styled(Box)({
  position: "absolute",
  width: "50%",
  height: "40%",
})

const MySpots = styled(Box)({
  width: "100%",
  height: "100%",
})
