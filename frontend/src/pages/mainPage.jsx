import React from "react"
import { Box, styled } from "@material-ui/core"
import RecommTripCard from "../components/main/recommTrip"
import Grid from "@mui/material/Grid/Grid"
import NowCourse from "../components/main/nowCourse"
import Mission from "../components/main/mission"

const MainPage = () => {
  return (
    <Background>
      <MainBox>
        <h1>Main Page</h1>

        {/* 여행지 추천 */}
        <RecommBox>
          <Grid container justifyContent="center">
            <RecommTripCard></RecommTripCard>
            <RecommTripCard></RecommTripCard>
            <RecommTripCard></RecommTripCard>
          </Grid>
        </RecommBox>
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
  alignContent: "center",
  justifyContent: "center",
  width: "100vw",
  height: "100vh",
  background: "#B59B89",
})

const MainBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "70%",
  background: "#faf8f7",
})

const RecommBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignContent: "center",
  width: "70%",
})

const CourseBox = styled(Box)({
  width: "40%",
  height: "15%",
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
