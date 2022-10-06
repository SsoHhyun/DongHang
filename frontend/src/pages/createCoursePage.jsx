//여행 일정 생성 페이지
//http://localhost:3000/course/create
import CourseSide from "../components/coursePage/courseside"
import Map from "../components/map"
import { styled, Box } from "@mui/material"
import RecommendBar from "../components/coursePage/recommendbar"

import React from "react"
import { useState } from "react"

const CreateCoursePage = () => {
  const [recommendspot, setRecommendspot] = useState([])
  const [restuarants, setRestuarants] = useState([])
  const [level, setLevel] = useState(13)
  const [courseSpot, setCourseSpot] = useState([])
  const addCourseList = (spotdata) => {
    setCourseSpot([...courseSpot, spotdata])
    //console.log(courseSpotspot)
  }
  const [currentSpot, setCurrentSpot] = useState({
    mapy1: "37.49817473153595",
    mapy2: "37.51783576502551",
    mapx1: "127.03121197537305",
    mapx2: "127.07049421820354",
  })

  const [selectedSpot, setSelectedSpot] = useState({
    title: "삼성역",
    mapy: 36.251422192521396,
    mapx: 127.40268434920021,
  })
  const [startDate, setStartdate] = useState("") //시작날짜
  const [endDate, setEnddate] = useState("") //끝날짜
  const deleteCourse = (index) => {
    setRecommendspot([...recommendspot, courseSpot[index]])
    const temp = courseSpot.slice(0, index)
    const temp2 = courseSpot.slice(index + 1)
    setCourseSpot([...temp, ...temp2])
    // console.log(courseSpot)
  }
  const deleteRecommendSpot = (index) => {
    const temp = recommendspot.slice(0, index)
    const temp2 = recommendspot.slice(index + 1)
    setRecommendspot([...temp, ...temp2])
    // console.log(courseSpot)
  }
  return (
    <Background>
      {/* <FontContainer> */}
      {/* 배경이미지만 */}
      {/* <Box
          style={{
            height: "16vh",
          }}
        ></Box> */}
      <CourseBack>
        <CourseSide
          recommendspot={courseSpot}
          selectedSpot={selectedSpot}
          deleteCourse={deleteCourse}
          setStartDate={setStartdate}
          setEnddate={setEnddate}
          startDate={startDate}
          endDate={endDate}
          setSelectedSpot={setSelectedSpot}
        />
        <MapBox>
          <MapWrapper id="map">
            <Map
              recommendspot={recommendspot}
              courseSpot={courseSpot}
              selectedSpot={selectedSpot}
              setCurrentSpot={setCurrentSpot}
              setSelectedSpot={setSelectedSpot}
              level={level}
              setLevel={setLevel}
            />
          </MapWrapper>
          <RecommendBar
            deleteRecommendSpot={deleteRecommendSpot}
            recommendspot={recommendspot}
            addCourseList={addCourseList}
            setSelectedSpot={setSelectedSpot}
            selectedSpot={selectedSpot}
            restaurants={restuarants}
            setRecommendspot={setRecommendspot}
            currentSpot={currentSpot}
            setRestuarants={setRestuarants}
          />
        </MapBox>
      </CourseBack>
      {/* </FontContainer> */}
    </Background>
  )
}
export default CreateCoursePage
const BottomPage = styled(Box)({
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.4)",
})
const Background = styled(Box)({
  width: "100vw",
  height: "200vh",
  backgroundImage: "url(" + "../img/kyeongju.jpg" + ")",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  backgroundPosition: "top center",
})

const CourseBack = styled(Box)({
  display: "flex",
  paddingTop: "17vh",
  justifyContent: "center",
  alignItems: "start",
  width: "100%",
  height: "83vh",
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  position: "absolute",
})

const MapBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  width: "60%",
  height: "95%",
  marginLeft: "1rem",
})

const MapWrapper = styled(Box)({
  width: "100%",
  height: "100%",
  backgroundColor: "tomato",
  borderRadius: 7,
  marginBottom: "1rem",
})
