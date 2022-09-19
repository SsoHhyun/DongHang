//여행 일정 상세 페이지
import { Box } from "@material-ui/core"
import Map from "../components/map"
import React from "react"
import Navbar from "../components/navbar"
import CourseSide from "../components/coursePage/courseside"

const CourseDetailPage = () => {
  return (
    <Box>
      <Navbar></Navbar>
      <Box>
        <Map></Map>
        <CourseSide></CourseSide>
      </Box>
    </Box>
  )
}
export default CourseDetailPage
