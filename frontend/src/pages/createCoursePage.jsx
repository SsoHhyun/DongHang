//여행 일정 생성 페이지
//http://localhost:3000/course/create
import React from "react"
import { Box } from "@mui/system"
import Navbar from "../components/navbar"
import CourseSide from "../components/coursePage/courseside"
import Map from "../components/map"
import RecommandBar from "../components/coursePage/recommandbar"

const CreateCoursePage = () => {
  return (
    <Box>
      <Navbar></Navbar>
      <Box>
        <CourseSide></CourseSide>
        <Map></Map>
        <RecommandBar></RecommandBar>
      </Box>
    </Box>
  )
}
export default CreateCoursePage
