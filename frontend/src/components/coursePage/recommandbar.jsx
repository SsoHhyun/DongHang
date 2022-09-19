import { Box } from "@material-ui/core"
import React from "react"
import { useState } from "react"
import { Tab } from "@material-ui/core"
import { TabPanel } from "@mui/lab"
import { TabContext } from "@mui/lab"
import { TabList } from "@mui/lab"
import SideContents from "./sidecontents"
import RecommandContents from "./recommandcontents"
//코스관련 사이드바
const RecommandBar = () => {
  const [value, setValue] = useState("1")
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <Box
      style={{
        height: "35%",
        backgroundColor: "white",
        position: "absolute",
        overflow: "auto",
        bottom: 0,
        width: "100%",
      }}
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="추천여행지" value="1" />
            <Tab label="근처음식점" value="2" />
          </TabList>
        </Box>
        <Box>
          <TabPanel value="1">
            <ul
              id="recommandul"
              style={{
                overflowX: "scroll",
                overflowY: "hidden",
                width: "100%",
                flexDirection: "row",
                whiteSpace: "nowrap",
                listStyle: "none",
                textAlign: "center",
              }}
            >
              <li>
                <RecommandContents></RecommandContents>
              </li>
              <li>
                <RecommandContents></RecommandContents>
              </li>
              <li>
                <RecommandContents></RecommandContents>
              </li>
              <li>
                <RecommandContents></RecommandContents>
              </li>
              <li>
                <RecommandContents></RecommandContents>
              </li>
              <li>
                <RecommandContents></RecommandContents>
              </li>
              <li>
                <RecommandContents></RecommandContents>
              </li>
              <li>
                <RecommandContents></RecommandContents>
              </li>
              <li>
                <RecommandContents></RecommandContents>
              </li>
              <li>
                <RecommandContents></RecommandContents>
              </li>
              <li>
                <RecommandContents></RecommandContents>
              </li>
            </ul>
          </TabPanel>
        </Box>
        <TabPanel value="2">
          <Box
            style={{
              overflowX: "auto",
              width: "300%",
              flexDirection: "row",
              whiteSpace: "nowrap",
            }}
          >
            <RecommandContents></RecommandContents>
            <RecommandContents></RecommandContents>
            <RecommandContents></RecommandContents>
            <RecommandContents></RecommandContents>
            <RecommandContents></RecommandContents>
            <RecommandContents></RecommandContents>
            <RecommandContents></RecommandContents>
          </Box>
        </TabPanel>
      </TabContext>
    </Box>
  )
}
export default RecommandBar
