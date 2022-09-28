//여행 일정 생성 페이지
//http://localhost:3000/course/create
import { Box } from "@mui/system"
import Navbar from "../components/navbar"
import CourseSide from "../components/coursePage/courseside"
import Map from "../components/map"
import { styled } from "@mui/material"
import RecommendBar from "../components/coursePage/recommendbar"
import interceptor from "../api/interceptor"
import React from "react"
import { useEffect, useState } from "react"

const CreateCoursePage = () => {
  const [recommendspot, setRecommendspot] = useState([])
  const addCourseList = (spotdata) => {
    setRecommendspot([...recommendspot, spotdata])
    console.log(recommendspot)
  }
  const [selectedSpot, setSelectedSpot] = useState({
    title: "삼성역",
    mapy: 37.50802,
    mapx: 127.062835,
  })
  const [startDate, setStartdate] = useState("") //시작날짜
  const [endDate, setEnddate] = useState("") //끝날짜
  const deleteCourse = (index) => {
    const temp = recommendspot.slice(0, index)
    const temp2 = recommendspot.slice(index + 1)
    setRecommendspot([...temp, ...temp2])
    console.log(recommendspot)
  }
  useEffect(() => {
    interceptor({
      url: "/api/trip?tripNo=11",
      method: "get",
      Authorization:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMDA0IiwiaXNzIjoiZG9uZ2hhbmcuY29tIiwiZXhwIjoxNjY0MzY5MTQ5LCJpYXQiOjE2NjQyODI3NDl9.x3usXeSLjI-FhIq8B4DyZkK_CDFBlgsfoXKyzMW_VtLn-RWuI0Orb2-AEZ1Zbqq5XwxFuowIdV-a66EQYF159Q",
    })
      .then((res) => {
        for (let i = 0; i < res.data.placeList.length; i++) {
          setRecommendspot([...recommendspot, res.data.placeList[i]])
        }
      })
      .catch((err) => {
        alert(err)
      })
  }, [])
  return (
    <Box>
      <Navbar></Navbar>
      <Box>
        <CourseSide
          recommendspot={recommendspot}
          selectedSpot={selectedSpot}
          deleteCourse={deleteCourse}
          setStartDate={setStartdate}
          setEnddate={setEnddate}
          startDate={startDate}
          endDate={endDate}
          setSelectedSpot={setSelectedSpot}
        ></CourseSide>
        <MapWrapper id="map">
          <Map
            center={{ lat: selectedSpot.mapy, lng: selectedSpot.mapx }}
            recommendspot={recommendspot}
          ></Map>
        </MapWrapper>
        <RecommendBar
          recommendspot={recommendspot}
          addCourseList={addCourseList}
          setSelectedSpot={setSelectedSpot}
          selectedSpot={selectedSpot}
        ></RecommendBar>
      </Box>
    </Box>
  )
}
export default CreateCoursePage

const MapWrapper = styled(Box)({
  width: "80vw",
  height: "62vh",
  position: "absolute",
  top: 0,
  right: 0,
})
