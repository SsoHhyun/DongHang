import { Box } from "@material-ui/core"
import React from "react"
import SideContents from "./sidecontents"
// 사이드바
const CourseSide = () => {
  return (
    <Box
      style={{
        width: "20%",
        height: "100%",
        backgroundColor: "white",
        position: "absolute",
        overflow: "auto",
      }}
    >
      <SideContents></SideContents>
      <SideContents></SideContents>
      <SideContents></SideContents>
      <SideContents></SideContents>
      <SideContents></SideContents>
      <SideContents></SideContents>
    </Box>
  )
}
export default CourseSide
