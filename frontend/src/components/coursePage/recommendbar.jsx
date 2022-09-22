import { Box } from "@material-ui/core"
import React from "react"
import { useState } from "react"
import { Tab } from "@material-ui/core"
import { TabPanel } from "@mui/lab"
import { TabContext } from "@mui/lab"
import { TabList } from "@mui/lab"
import RecommendContents from "./recommendcontents"
import { styled } from "@mui/material"
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown"
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp"
//코스관련 사이드바
const RecommendBar = () => {
  const [value, setValue] = useState("1")
  const [open, setOpen] = useState(false)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const RecommendOpen = () => {
    if (open === true) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  }

  return (
    <Box>
      {open === true ? (
        <Box
          style={{
            width: "80%",
            height: "45%",
            position: "absolute",
            backgroundColor: "white",
            bottom: 0,
            left: "20%",
          }}
        >
          <ArrowCircleDownIcon
            onClick={RecommendOpen}
            style={{ left: "37.5%", position: "absolute", color: "#121212" }}
          ></ArrowCircleDownIcon>
          <br></br>
          <Box>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="추천여행지" value="1" />
                  <Tab label="근처음식점" value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <StyledRecommendSlide>
                  <RecommendContents></RecommendContents>
                  <RecommendContents></RecommendContents>
                  <RecommendContents></RecommendContents>
                  <RecommendContents></RecommendContents>
                  <RecommendContents></RecommendContents>
                  <RecommendContents></RecommendContents>
                  <RecommendContents></RecommendContents>
                  <RecommendContents></RecommendContents>
                  <RecommendContents></RecommendContents>
                  <RecommendContents></RecommendContents>
                  <RecommendContents></RecommendContents>
                  <RecommendContents></RecommendContents>
                  <RecommendContents></RecommendContents>
                  <RecommendContents></RecommendContents>
                  <RecommendContents></RecommendContents>
                  <RecommendContents></RecommendContents>
                  <RecommendContents></RecommendContents>
                  <RecommendContents></RecommendContents>
                  <RecommendContents></RecommendContents>
                </StyledRecommendSlide>
              </TabPanel>
              <TabPanel value="2">
                <StyledRecommendSlide>
                  <RecommendContents></RecommendContents>
                  <RecommendContents></RecommendContents>
                  <RecommendContents></RecommendContents>
                  <RecommendContents></RecommendContents>
                  <RecommendContents></RecommendContents>
                  <RecommendContents></RecommendContents>
                  <RecommendContents></RecommendContents>
                  <RecommendContents></RecommendContents>
                  <RecommendContents></RecommendContents>
                  <RecommendContents></RecommendContents>
                  <RecommendContents></RecommendContents>
                  <RecommendContents></RecommendContents>
                  <RecommendContents></RecommendContents>
                  <RecommendContents></RecommendContents>
                  <RecommendContents></RecommendContents>
                  <RecommendContents></RecommendContents>
                  <RecommendContents></RecommendContents>
                  <RecommendContents></RecommendContents>
                  <RecommendContents></RecommendContents>
                </StyledRecommendSlide>
              </TabPanel>
            </TabContext>
          </Box>
        </Box>
      ) : (
        <Box>
          <ArrowCircleUpIcon
            onClick={RecommendOpen}
            style={{
              left: "50%",
              position: "absolute",
              bottom: 0,
              color: "#121212",
            }}
          ></ArrowCircleUpIcon>
        </Box>
      )}
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
