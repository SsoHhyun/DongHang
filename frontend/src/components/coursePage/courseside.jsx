import { Box } from "@material-ui/core"
import React from "react"
import SideContents from "./sidecontents"
import { styled } from "@mui/material"
// 사이드바
const StyledCourseSide = styled(Box)({
  width: "20%",
  height: "100%",
  backgroundColor: "white",
  position: "absolute",
  overflow: "auto",
})

const CourseSide = () => {
  return (
    <StyledCourseSide>
      <SideContents></SideContents>
      <SideContents></SideContents>
      <SideContents></SideContents>
      <SideContents></SideContents>
      <SideContents></SideContents>
      <SideContents></SideContents>
      <SideContents></SideContents>
      <SideContents></SideContents>
      <SideContents></SideContents>
    </StyledCourseSide>
  )
}
export default CourseSide
