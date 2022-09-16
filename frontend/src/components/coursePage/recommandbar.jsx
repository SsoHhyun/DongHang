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
        width: "100%",
        height: "30%",
        backgroundColor: "white",
        position: "absolute",
        overflowX: "auto",
        bottom: 0,
        display: "inline-block",
      }}
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="추천여행지" value="1" />
            <Tab label="근처음식점" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Box style={{ overflowX: "auto" }}>
            <RecommandContents></RecommandContents>
            <RecommandContents></RecommandContents>
            <RecommandContents></RecommandContents>
            <RecommandContents></RecommandContents>
            <RecommandContents></RecommandContents>
            <RecommandContents></RecommandContents>
            <RecommandContents></RecommandContents>
            <RecommandContents></RecommandContents>
          </Box>
        </TabPanel>
        <TabPanel value="2" style={{ float: "left" }}>
          <RecommandContents></RecommandContents>
          <RecommandContents></RecommandContents>
          <RecommandContents></RecommandContents>
          <RecommandContents></RecommandContents>
          <RecommandContents></RecommandContents>
        </TabPanel>
      </TabContext>
    </Box>
  )
}
export default RecommandBar
