import React from "react"
import { Box } from "@material-ui/core"
import RecommTripCard from "../components/main/recommTrip"
import Grid from "@mui/material/Grid/Grid"
import Container from "@mui/material/Container/Container"

const MainPage = () => {
  return (
    <Container fixed>
      <h1>Main Page</h1>

      <Box>
        {/* 여행지 추천 */}
        <Grid container>
          <RecommTripCard></RecommTripCard>
          <RecommTripCard></RecommTripCard>
          <RecommTripCard></RecommTripCard>
          <RecommTripCard></RecommTripCard>
          <RecommTripCard></RecommTripCard>
        </Grid>

        {/* 현재 진행중인 일정 */}
        <Box>
          <p>여행일정</p>
        </Box>

        {/* 미션 */}
        <Box>
          <p>미션</p>
        </Box>
      </Box>
    </Container>
  )
}
export default MainPage
