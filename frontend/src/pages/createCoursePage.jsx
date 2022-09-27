//여행 일정 생성 페이지
//http://localhost:3000/course/create
import { Box } from "@mui/system"
import Navbar from "../components/navbar"
import CourseSide from "../components/coursePage/courseside"
import Map from "../components/map"
import { styled } from "@mui/material"
import RecommendBar from "../components/coursePage/recommendbar"

const CreateCoursePage = () => {
  return (
    <Box>
      <Navbar></Navbar>
      <Box>
        <CourseSide></CourseSide>
        <MapWrapper id="map">
          <Map></Map>
        </MapWrapper>
        <RecommendBar></RecommendBar>
      </Box>
    </Box>
  )
}
export default CreateCoursePage

const MapWrapper = styled(Box)({
  width: "100%",
  height: "100%",
  position: "absolute",
  zIndex: -1,
})
