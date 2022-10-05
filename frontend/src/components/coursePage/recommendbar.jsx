import { Box } from "@material-ui/core"
import React, { useEffect } from "react"
import { useState } from "react"
import { Tab } from "@material-ui/core"
import { TabPanel } from "@mui/lab"
import { TabContext } from "@mui/lab"
import { TabList } from "@mui/lab"
import RecommendContents from "./recommendcontents"
import { styled } from "@mui/material"
//코스관련 사이드바
const RecommendBar = (props) => {
  const [value, setValue] = useState("1")

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <Box>
      <WrapRecommendBar>
        <br></br>
        <WrapTab>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <CourseTab label="추천여행지" value="1" />
                <CourseTab label="음식점" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <StyledRecommendSlide>
                {props.recommendspot.map((user, index) => (
                  <RecommendContents
                    spot={user}
                    key={index}
                    idx={index}
                    addCourseList={props.addCourseList}
                    setSelectedSpot={props.setSelectedSpot}
                    selectedSpot={props.selectedSpot}
                    deleteRecommendSpot={props.deleteRecommendSpot}
                  ></RecommendContents>
                ))}
              </StyledRecommendSlide>
            </TabPanel>
            <TabPanel value="2">
              <StyledRecommendSlide>
                {props.restaurants.map((user, index) => (
                  <RecommendContents
                    spot={props.restaurants[index]}
                    key={index}
                    addCourseList={props.addCourseList}
                    setSelectedSpot={props.setSelectedSpot}
                    selectedSpot={props.selectedSpot}
                  ></RecommendContents>
                ))}
              </StyledRecommendSlide>
            </TabPanel>
          </TabContext>
        </WrapTab>
      </WrapRecommendBar>
    </Box>
  )
}
export default RecommendBar

const StyledRecommendSlide = styled(Box)({
  whiteSpace: "nowrap",
  overflowX: "scroll",
  overflowY: "hidden",
  display: "flex",
})

const WrapTab = styled(Box)({
  bottom: 0,
  position: "absolute",
  width: "100%",
  height: "100%",
})
const WrapRecommendBar = styled(Box)({
  backgroundColor: "white",
  width: "60vw",
  height: "28vh",
  position: "absolute",
  bottom: 0,
  left: "23vw",
  paddingBottom: 30,
})
const CourseTab = styled(Tab)({
  fontSize: 14,
  fontFamily: "HallymGothic-Regular",
})
