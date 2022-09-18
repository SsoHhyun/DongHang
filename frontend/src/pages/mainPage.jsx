import React from "react"
import { Box, Paper } from "@material-ui/core"
import RecommTripCard from "../components/main/recommTrip"
import Grid from "@mui/material/Grid/Grid"
import Container from "@mui/material/Container/Container"
import NowCourse from "../components/main/nowCourse"
import Mission from "../components/main/mission"

const MainPage = () => {
  return (
    <Container display direction="column" alignItems="center">
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
      <Paper>
        <NowCourse></NowCourse>
      </Paper>

      {/* 미션 */}
      <Paper>
        <Mission></Mission>
      </Paper>
    </Container>
  )
}
export default MainPage
