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

const MainPage = () => {
  const navigate = useNavigate()

  // 섹션 넘어가는 애니메이션
  // window.addEventListener(
  //   "wheel",
  //   (e) => {
  //     e.preventDefault()
  //   },
  //   { passive: true }
  // )

  // var mBackground = $("html")
  // var page = 1

  // mBackground.animate({ scrollTop: 0.1 }, 10)

  // $(window).on("wheel", function (e) {
  //   if (mBackground.is(":animated")) return
  //   if (e.originalEvent.deltaY > 0) {
  //     if (page === 2) return
  //     page++
  //   } else if (e.originalEvent.deltaY < 0) {
  //     if (page === 1) return
  //     page--
  //   }
  //   var posTop = (page - 1) * $(window).height()
  //   mBackground.animate({ scrollTop: posTop })
  // })
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

  return (
    <Background>
      <RecomImg>
        <Img src="img/fall.jpg" alt="" />
      </RecomImg>
      <MainBackground>
        <MainBox>
          {/* 현재 진행중인 일정 */}
          <CourseBox
          // data-aos="fade-up"
          // data-aos-anchor-placement="center-center"
          >
            <NowCourse></NowCourse>
          </CourseBox>
          {/* 미션 */}
          <MissionBox
          // data-aos="fade-up"
          // data-aos-anchor-placement="center-center"
          >
            <Mission></Mission>
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
})

const Img = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
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
