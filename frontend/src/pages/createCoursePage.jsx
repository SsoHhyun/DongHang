//여행 일정 생성 페이지
//http://localhost:3000/course/create
import { Box } from "@mui/system"
import CourseSide from "../components/coursePage/courseside"
import Map from "../components/map"
import { styled, Button } from "@mui/material"
import RecommendBar from "../components/coursePage/recommendbar"
import interceptor from "../api/interceptor"
import React from "react"
import { useState } from "react"
import StarsIcon from "@mui/icons-material/Stars"
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
    <FontContainer>
      {/* 배경이미지만 */}
      <Box
        style={{
          background: "#003458",
          height: "16vh",
          marginBottom: "1rem",
        }}
      ></Box>
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
          recommendspot={recommendspot}
          courseSpot={courseSpot}
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
          top: "70%",
          right: "17vw",
          fontSize: 14,
          borderRadius: 10,
          fontFamily: "HallymGothic-Regular",
          zIndex: 2,
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
        <StarsIcon></StarsIcon>추천받기
      </Button>
      <RecommendBar
        deleteRecommendSpot={deleteRecommendSpot}
        recommendspot={recommendspot}
        addCourseList={addCourseList}
        setSelectedSpot={setSelectedSpot}
        selectedSpot={selectedSpot}
        restaurants={restuarants}
      ></RecommendBar>
    </FontContainer>
  )
}
export default CreateCoursePage

const MapWrapper = styled(Box)({
  width: "60vw",
  height: "48vh",
  position: "absolute",
  paddingTop: "8vh",
  left: "23vw",
  zIndex: -1,
})
const FontContainer = styled(Box)({
  color: "#1976D2",
  fontSize: 16,
  fontWeight: "bold",
  borderRadius: 10,
  fontFamily: "HallymGothic-Regular",
})

const CourseContainer = styled(Box)({
  width: "100vw",
  height: "100vh",
  backgroundImage: "url(" + "img/jeju.jpg" + ")",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  backgroundPosition: "top center",
})
