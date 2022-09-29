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
  const [courseSpot, setCourseSpot] = useState([])
  const [recommendspot, setRecommendspot] = useState([])
  const addCourseList = (spotdata) => {
    setCourseSpot([...courseSpot, spotdata])
    //console.log(courseSpotspot)
  }
  const [selectedSpot, setSelectedSpot] = useState({
    title: "삼성역",
    mapy: 37.50802,
    mapx: 127.062835,
  })
  const [startDate, setStartdate] = useState("") //시작날짜
  const [endDate, setEnddate] = useState("") //끝날짜
  const deleteCourse = (index) => {
    const temp = courseSpot.slice(0, index)
    const temp2 = courseSpot.slice(index + 1)
    setCourseSpot([...temp, ...temp2])
    // console.log(courseSpot)
  }
  useEffect(() => {
    interceptor({
      url: "/api/trip?tripNo=2019",
      method: "get",
    })
      .then((res) => {
        for (let i = 0; i < res.data.placeList.length; i++) {
          setRecommendspot((recommendspot) => [
            ...recommendspot,
            res.data.placeList[i],
          ])
          console.log(res.data)
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
          recommendspot={courseSpot}
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
            // center={{ lat: selectedSpot.mapy, lng: selectedSpot.mapx }}
            recommendspot={courseSpot}
            selectedSpot={selectedSpot}
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
  zIndex: -1,
})
