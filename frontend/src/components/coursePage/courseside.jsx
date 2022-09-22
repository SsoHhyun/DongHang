import { Box } from "@material-ui/core"
import React from "react"
import SideContents from "./sidecontents"
import { styled } from "@mui/material"
import { useState } from "react"
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft"
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight"
// 사이드바

const CourseSide = () => {
  const [open, setOpen] = useState(false)
  const sideOpen = () => {
    if (open === true) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  }

  return (
    <Box>
      {open === true ? (
        <SideBox>
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

          <ArrowCircleLeftIcon
            onClick={sideOpen}
            style={{
              color: "#121212",
              position: "absolute",
              top: "50%",
              left: "20%",
            }}
          ></ArrowCircleLeftIcon>
        </SideBox>
      ) : (
        <Box>
          <ArrowCircleRightIcon
            onClick={sideOpen}
            style={{
              position: "absolute",
              top: "50%",
              color: "#121212",
            }}
          ></ArrowCircleRightIcon>
        </Box>
      )}
    </Box>
  )
}
export default CourseSide

const StyledCourseSide = styled(Box)({
  width: "20vw",
  height: "100vh",
  // backgroundColor: "white",
  position: "absolute",
  overflow: "auto",
  left: "0%",
})

const SideBox = styled(Box)({})
