import { Box } from "@material-ui/core"
import React from "react"
import SideContents from "./sidecontents"
import { styled } from "@mui/material"
import { useState, useEffect } from "react"
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft"
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight"
import interceptor from "../../api/interceptor"
// 사이드바

const CourseSide = () => {
  const [open, setOpen] = useState(false)
  const [recommendspot, setRecommendspot] = useState([])

  useEffect(() => {
    interceptor({
      url: "/api/trip?tripNo=2&userNo=1",
      method: "get",
    })
      .then((res) => {
        for (let i = 0; i < res.data.placeList.length; i++) {
          setRecommendspot((recommendspot) => [
            ...recommendspot,
            res.data.placeList[i],
          ])
          console.log(res.data)
        }
      })
      .catch((err) => {
        alert(err)
      })
  }, [])

  return (
    <Box>
      {open === true ? (
        <Box>
          <StyledCourseSide>
            {recommendspot.map((placeList, index) => (
              <SideContents
                key={index}
                spot={recommendspot[index]}
              ></SideContents>
            ))}
          </StyledCourseSide>

          <ArrowCircleLeftIcon
            onClick={() => {
              setOpen((open) => !open)
            }}
            style={{
              color: "#121212",
              position: "absolute",
              top: "50%",
              left: "20%",
            }}
          ></ArrowCircleLeftIcon>
        </Box>
      ) : (
        <Box>
          <ArrowCircleRightIcon
            onClick={() => {
              setOpen((open) => !open)
            }}
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
  height: "100%",
  // backgroundColor: "white",
  position: "absolute",
  overflow: "auto",
  left: "0%",
})
