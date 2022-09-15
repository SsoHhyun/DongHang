import React from "react"
import { Box } from "@material-ui/core"
import RecommTripCard from "../components/main/recommTrip"

const MainPage = () => {
  return (
    <Box>
      <h1>Main Page</h1>
      <Box>
        <Box>
          <RecommTripCard></RecommTripCard>
          <RecommTripCard></RecommTripCard>
          <RecommTripCard></RecommTripCard>
        </Box>
        <Box>
          <p>여행일정</p>
        </Box>
        <Box>
          <p>미션</p>
        </Box>
      </Box>
    </Box>
  )
}
export default MainPage
