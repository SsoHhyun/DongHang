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
  const deleteCourse = (index) => {
    const temp = recommendspot.slice(0, index)
    const temp2 = recommendspot.slice(index + 1)
    setRecommendspot([...temp, ...temp2])
    console.log(recommendspot)
  }
  useEffect(() => {
    interceptor({
      url: "/api/trip?tripNo=2&userNo=1",
      method: "get",
    })
      .then((res) => {
        for (let i = 0; i < res.data.placeList.length; i++) {
          setRecommendspot((recommendspot) => [
            ...recommendspot,
            res.data.placeList[i],
          ])
        }
        console.log(res.data)
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
          deleteCourse={deleteCourse}
        ></CourseSide>
        <MapWrapper id="map">
          <Map></Map>
        </MapWrapper>
        <RecommendBar
          recommendspot={recommendspot}
          addCourseList={addCourseList}
        ></RecommendBar>
      </Box>
    </Box>
  )
}
export default CreateCoursePage

const MapWrapper = styled(Box)({
  width: "100%",
  height: "100%",
  position: "absolute",
  zIndex: -1,
})
