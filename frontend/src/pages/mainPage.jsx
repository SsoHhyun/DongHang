import React from "react"
import { Box, styled } from "@material-ui/core"
import RecommTripCard from "../components/main/recommTrip"
import Grid from "@mui/material/Grid/Grid"
import NowCourse from "../components/main/nowCourse"
import Mission from "../components/main/mission"

const MainBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignContent: "center",
  height: "100%",
})

const MainPage = () => {
  return (
    <MainBox>
      <h1>Main Page</h1>

      {/* 여행지 추천 */}
      <Box>
        <Grid container justifyContent="center">
          <RecommTripCard></RecommTripCard>
          <RecommTripCard></RecommTripCard>
          <RecommTripCard></RecommTripCard>
        </Grid>
      </Box>

      {/* 현재 진행중인 일정 */}
      <Box>
        <NowCourse></NowCourse>
      </Box>

      {/* 미션 */}
      <Box>
        <Mission></Mission>
      </Box>
    </MainBox>
  )
}
export default MainPage
