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
import { Button } from "@material-ui/core"
import { useEffect, useState } from "react"

const CreateCoursePage = () => {
  const [recommendspot, setRecommendspot] = useState([])
  const [restuarants, setRestuarants] = useState([])
  const [level, setLevel] = useState(3)
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
  return (
    <Box>
      <Box style={{ paddingTop: "8vh" }}>
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
            setCurrentSpot={setCurrentSpot}
            setSelectedSpot={setSelectedSpot}
            level={level}
            setLevel={setLevel}
          ></Map>
        </MapWrapper>
        <Button
          style={{
            position: "absolute",
            top: "55%",
            right: "0",
            backgroundColor: "white",
          }}
          onClick={() => {
            interceptor({
              url: `/api/place/recommend?mapx1=${currentSpot.mapx1}&mapx2=${currentSpot.mapx2}&mapy1=${currentSpot.mapy1}&mapy2=${currentSpot.mapy2}`,
              method: "get",
            })
              .then((res) => {
                setRecommendspot([])
                for (let i = 0; i < res.data.length; i++) {
                  if (i > 20) break
                  setRecommendspot((recommendspot) => [
                    ...recommendspot,
                    res.data[i],
                  ])
                }
              })
              .catch((err) => {
                alert(err)
              })
            interceptor({
              url: `/api/place/restaurants?mapx1=${currentSpot.mapx1}&mapx2=${currentSpot.mapx2}&mapy1=${currentSpot.mapy1}&mapy2=${currentSpot.mapy2}`,
              method: "get",
            })
              .then((res) => {
                setRestuarants([])
                for (let i = 0; i < res.data.length; i++) {
                  if (i > 20) break
                  setRestuarants((restaurants) => [...restaurants, res.data[i]])
                }
              })
              .catch((err) => {
                alert(err)
              })
          }}
        >
          추천받기
        </Button>
        <RecommendBar
          recommendspot={recommendspot}
          addCourseList={addCourseList}
          setSelectedSpot={setSelectedSpot}
          selectedSpot={selectedSpot}
          restaurants={restuarants}
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
