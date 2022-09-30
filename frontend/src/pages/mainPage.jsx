import React from "react"
import { Box, styled } from "@material-ui/core"
import RecommTrip from "../components/main/recommTrip"
import Grid from "@mui/material/Grid/Grid"
import NowCourse from "../components/main/nowCourse"
import Mission from "../components/main/mission"
import Fade from "react-reveal/Fade" // Import react-reveal(Fade)

const MainPage = () => {
  return (
    <Background>
      <Fade
        bottom
        sx={{
          width: "100%",
          height: "50%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <RecomImg>
          <Img src="img/water.jpg" alt="" />
        </RecomImg>
      </Fade>

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
  flexDirection: "row",
  // justifyContent: "center",
  // alignItems: "center",
  width: "100vw",
  height: "100vh",
  background: "white",
  paddingTop: "8vh",
})

const MainBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "50vw",
  height: "80vh",
  background: "white",
})

// const RecommBox = styled(Box)({
//   display: "flex",
//   flexDirection: "column",
//   alignContent: "center",
//   width: "40vw",
//   height: "100vh",
// })

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
  width: "50%",
})

const Img = styled("img")({
  maxWidth: "100%",
  height: "100%",
})

const RecomImg = styled(Box)({
  width: "100vw",
  height: "50vh",
})
