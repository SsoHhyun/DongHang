import { React, useEffect } from "react"
import $ from "jquery"
import { Box, styled } from "@material-ui/core"
import RecommTrip from "../components/main/recommTrip"
import Grid from "@mui/material/Grid/Grid"
import NowCourse from "../components/main/nowCourse"
import Mission from "../components/main/mission"
// import Fade from "react-reveal/Fade"
import { useScrollFadeIn } from "../app/hooks"

const MainPage = () => {
  // 섹션 넘어가는 애니메이션
  window.addEventListener(
    "wheel",
    (e) => {
      e.preventDefault()
    },
    { passive: false }
  )

  var mBackground = $("html")
  var page = 1

  mBackground.animate({ scrollTop: 0 }, 10)

  $(window).on("wheel", function (e) {
    if (mBackground.is(":animated")) return
    if (e.originalEvent.deltaY > 0) {
      if (page == 2) return
      page++
    } else if (e.originalEvent.deltaY < 0) {
      if (page == 1) return
      page--
    }
    var posTop = (page - 1) * $(window).height()
    mBackground.animate({ scrollTop: posTop })
  })

  return (
    <Background>
      <RecomImg>
        <Img src="img/fall.jpg" alt="" />
      </RecomImg>
      <MainBox>
        {/* 현재 진행중인 일정 */}
        <CourseBox>현재 진행중인 일정이 없습니다.</CourseBox>
        {/* 미션 */}
        <MissionBox>
          <Mission></Mission>
        </MissionBox>
      </MainBox>
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
  width: "40%",
  height: "5vh",
  border: "2px solid #322725",
  borderRadius: "10px",
  padding: "5%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "2em",
  margin: "3% 0",
})

const MissionBox = styled(Box)({
  width: "40%",
  justifyContent: "center",
})
