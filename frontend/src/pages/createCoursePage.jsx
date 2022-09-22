//여행 일정 생성 페이지
//http://localhost:3000/course/create
import { Box } from "@mui/system"
import Navbar from "../components/navbar"
import CourseSide from "../components/coursePage/courseside"
import Map from "../components/map"
import RecommendBar from "../components/coursePage/recommendbar"

const CreateCoursePage = () => {
  return (
    <Box>
      <Navbar></Navbar>
      <Box>
        <CourseSide></CourseSide>
        <Map></Map>
        <RecommendBar></RecommendBar>
      </Box>
    </Box>
  )
}
export default CreateCoursePage
