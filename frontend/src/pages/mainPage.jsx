import { React, useEffect } from "react"
import $ from "jquery"
import { Box, styled, Button } from "@material-ui/core"
import RecommTrip from "../components/main/recommTrip"
import Grid from "@mui/material/Grid/Grid"
import NowCourse from "../components/main/nowCourse"
import Mission from "../components/mission/mission"
// import Fade from "react-reveal/Fade"
import AOS from "aos"
import "aos/dist/aos.css"
import { setUserInfo } from "../features/user/userSlice"
import { useSelector, useDispatch } from "react-redux/es/exports"
import SurveyOpen from "../components/main/surveyOpen"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import interceptor from "../api/interceptor"
import { useState } from "react"

const MainPage = () => {
  const navigate = useNavigate()

  const [myTrip, setMyTrip] = useState(0)
  const [myPlace, setMyPlace] = useState([])

  const dispatch = useDispatch()

  useEffect(() => {
    AOS.init()
    interceptor({
      url: "/user/info",
      method: "get",
    }).then((res) => {
      dispatch(setUserInfo(res.data))
    })
  }, [])

  useEffect(() => {
    interceptor({
      url: "/api/trip/getTodayTrip",
      method: "get",
    }).then((res) => {
      console.log(res.data)
      setMyTrip(res.data.tripNo)
      setMyPlace(res.data.placeList)
    })
  }, [])

  return (
    <Background>
      <RecomImg>
        <Img src="img/fall.jpg" alt="" />
        <Img src="img/donghaeng_hanja.jpg" alt="" />
      </RecomImg>
      {myTrip === null ? (
        <MainBackground>
          <MainBox>
            {/* 현재 진행중인 일정 */}
            <CourseBox
            // data-aos="fade-up"
            // data-aos-anchor-placement="center-center"
            >
              현재 일정이 없습니다.
              <Button onClick={() => navigate("/course/create")}>
                일정 생성하기
              </Button>
            </CourseBox>
            {/* 미션 */}
            <MissionBox
            // data-aos="fade-up"
            // data-aos-anchor-placement="center-center"
            >
              현재 미션이 없습니다.
            </MissionBox>
            <Button
              onClick={() => {
                // getSurveyUrl()
                navigate("/survey/info")
              }}
            >
              설문 공유하기
            </Button>
          </MainBox>
        </MainBackground>
      ) : (
        <MainBackground>
          <MainBox>
            {/* 현재 진행중인 일정 */}
            <CourseBox
            // data-aos="fade-up"
            // data-aos-anchor-placement="center-center"
            >
              <NowCourse tripNo={myTrip} placeList={myPlace}></NowCourse>
            </CourseBox>
            {/* 미션 */}
            <MissionBox
            // data-aos="fade-up"
            // data-aos-anchor-placement="center-center"
            >
              <Mission tripNo={myTrip}></Mission>
            </MissionBox>
            <Button
              onClick={() => {
                // getSurveyUrl()
                navigate("/survey/info")
              }}
            >
              설문 공유하기
            </Button>
          </MainBox>
        </MainBackground>
      )}
    </Background>
  )
}
export default MainPage

const Background = styled(Box)({
  display: "flex",
  flexDirection: "column",
  // justifyContent: "center",
  // alignItems: "center",
  alignItems: "center",
  background: "#d5c0b4",
})

const RecomImg = styled(Box)({
  width: "100%",
  height: "100vh",
  overflow: "hidden",
  position: "relative",
})

const Img = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
})

const MainBackground = styled(Box)({
  background: "#d5c0b4",
})

const MainBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "80vw",
  height: "100vh",
  background: "white",
})

const CourseBox = styled(Box)({
  width: "20%",
  height: "30vh",
  overflowY: "auto",
  background: "#faf8f7",
  borderRadius: "10px",
  padding: "5%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "2em",
  margin: "3%",
})

const MissionBox = styled(Box)({
  width: "30%",
  justifyContent: "center",
  background: "#faf8f7",
})
