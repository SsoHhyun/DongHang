//여행 일정 생성 페이지
//http://localhost:3000/course/create
import { Box } from "@mui/system"
import CourseSide from "../components/coursePage/courseside"
import Map from "../components/map"
import { styled } from "@mui/material"
import RecommendBar from "../components/coursePage/recommendbar"
import interceptor from "../api/interceptor"
import React from "react"
import { useEffect, useState } from "react"
import Swal from "sweetalert2"

const CreateCoursePage = () => {
  const [courseSpot, setCourseSpot] = useState([])
  const [recommendspot, setRecommendspot] = useState([])
  const [mapInfo, setMapInfo] = useState({
    mapx1: "",
    mapx2: "",
    mapy1: "",
    mapy2: "",
  })

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
    // if (recommendspot == null) {
    //   Swal.fire(
    //     "어서오세요!",
    //     "추천 여행지를 클릭해 나만의 일정을 생성해주세요",
    //     "info"
    //   )
    // }
    interceptor({
      url: `/api/place/recommend?mapx1=${mapInfo.mapx1}&mapx2=${mapInfo.mapx2}&mapy1=${mapInfo.mapy1}&mapy2=${mapInfo.mapy2}`,
      method: "get",
    })
      .then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          setRecommendspot((recommendspot) => [...recommendspot, res.data[i]])
        }
        console.log(res.data)
      })
      .catch((err) => {
        alert(err)
      })
  }, [])

  return (
    <Box style={{ paddingTop: "8vh", width: "80vw", margin: "auto" }}>
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
            setSelectedSpot={setSelectedSpot}
            setMapInfo={setMapInfo}
            mapInfo={mapInfo}
          ></Map>
        </MapWrapper>
        <RecommendBar
          style={{ left: "20%", bottom: "0", position: "absolute" }}
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
  width: "61.5vw",
  height: "54vh",
  position: "absolute",
  top: 0,
  left: "30vw",
  zIndex: -1,
  paddingTop: "9vh",
  borderRadius: "1rem",
  marginBottom: "2px",
})
