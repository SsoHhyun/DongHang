import React, { useState } from "react"
import {
  Box,
  Paper,
  styled,
  Tab,
  Typography,
  ImageList,
  ImageListItem,
} from "@mui/material"
import { TabContext, TabList, TabPanel } from "@mui/lab"
import LastCourse from "./lastCourse"

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
]

const Photos = () => {
  return (
    <ImageList
      sx={{ width: "100%", height: "70vh" }}
      cols={4}
      rowHeight={"auto"}
    >
      {itemData.map((item) => (
        <MyPhoto key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
            style={{ borderRadius: 4 }}
            onClick={() => {}}
          />
        </MyPhoto>
      ))}
    </ImageList>
  )
}

function LabTabs() {
  const [value, setValue] = useState("1")

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box>
          <TabList onChange={handleChange}>
            <Tab label="앨범" value="1" />
            <Tab label="여행기록" value="2" />
          </TabList>
        </Box>
        <AlbumTitle>
          <AlbumName>나의 여행</AlbumName>
          <Period>2022년 09월 22일 ~ 2022년 09월 25일</Period>
        </AlbumTitle>
        <TabPanel value="1">
          <Photos />
        </TabPanel>
        <TabPanel value="2">
          <LastCourse />
        </TabPanel>
      </TabContext>
    </Box>
  )
}

const Album = () => {
  return (
    <AlbumContainer>
      <LabTabs />
    </AlbumContainer>
  )
}

export default Album

const AlbumContainer = styled(Paper)({
  borderRadius: 20,
  width: "53vw",
  height: "95vh",
  backgroundColor: "beige",
  marginLeft: "1.5rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
})

const AlbumTitle = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
})

const AlbumName = styled(Typography)({
  textAlign: "center",
  fontSize: 30,
  color: "brown",
  fontWeight: "bold",
})

const Period = styled(Typography)({
  textAlign: "center",
  fontSize: 16,
  color: "grey",
})

const MyPhoto = styled(ImageListItem)({
  margin: 3,
})
