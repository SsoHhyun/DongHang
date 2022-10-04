import React, { useState, useEffect } from "react"
import interceptor from "../../api/interceptor"
import { useSelector, useDispatch } from "react-redux/es/exports"
import {
  Box,
  Paper,
  styled,
  Tab,
  Typography,
  ImageList,
  ImageListItem,
  Modal,
  Button,
} from "@mui/material"
import { TabContext, TabList, TabPanel } from "@mui/lab"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import LastCourse from "./lastCourse"
import {
  setClose,
  setImgIndex,
  setOpen,
  nextImg,
  previousImg,
} from "../../app/store"

const Photos = (props) => {
  const dispatch = useDispatch()
  const [itemData, setItemData] = useState([])
  const tripInfo = useSelector((state) => state.lastTrips)
  useEffect(() => {
    interceptor({
      url: `/upload/getTripPhotoList?tripNo=${tripInfo[props.i].tripNo}`,
      method: "get",
    }).then((res) => {
      setItemData(res.data)
      console.log(res.data)
    })
  }, [])

  return (
    <ImageList sx={{ width: "100%", height: "70vh" }} cols={4} rowHeight={164}>
      {itemData.map((item, i) => (
        <MyPhoto key={i}>
          <img
            src={`${itemData[i]}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${itemData[i]}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item}
            loading="lazy"
            style={{ borderRadius: 4 }}
            onClick={() => {
              dispatch(setOpen())
              dispatch(setImgIndex(i))
            }}
          />
        </MyPhoto>
      ))}
    </ImageList>
  )
}

const BasicModal = (props) => {
  const open = useSelector((state) => state.open)
  const imgIndex = useSelector((state) => state.imgIndex)
  const [itemData, setItemData] = useState([])
  const dispatch = useDispatch()
  const tripInfo = useSelector((state) => state.lastTrips)
  const handleClose = () => dispatch(setClose())
  const handleNext = () => dispatch(nextImg())
  const handleBack = () => dispatch(previousImg())
  useEffect(() => {
    interceptor({
      url: `/upload/getTripPhotoList?tripNo=${tripInfo[props.i].tripNo}`,
      method: "get",
    }).then((res) => {
      console.log(res.data)
      setItemData(res.data)
    })
  }, [])
  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <ModalContainer>
          <PhotoQuit onClick={handleClose}>✖</PhotoQuit>
          <PhotoModal src={itemData[imgIndex]} />
          {imgIndex === 0 || imgIndex === itemData.length - 1 ? (
            imgIndex === 0 ? (
              <SlideArrow>
                <BackArrow color="disabled" />
                <NextArrow sx={{ color: "white" }} onClick={handleNext} />
              </SlideArrow>
            ) : (
              <SlideArrow>
                <BackArrow sx={{ color: "white" }} onClick={handleBack} />
                <NextArrow color="disabled" />
              </SlideArrow>
            )
          ) : (
            <SlideArrow>
              <BackArrow sx={{ color: "white" }} onClick={handleBack} />
              <NextArrow sx={{ color: "white" }} onClick={handleNext} />
            </SlideArrow>
          )}
        </ModalContainer>
      </Modal>
    </div>
  )
}

function LabTabs(props) {
  const [value, setValue] = useState("1")
  const open = useSelector((state) => state.open)
  const tripInfo = useSelector((state) => state.lastTrips)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  console.log("앨범열림")
  console.log(props)
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
          <AlbumName>{tripInfo[props.i].tripName}</AlbumName>
          <Period>{`${tripInfo[props.i].startDate} ~ ${
            tripInfo[props.i].endDate
          }`}</Period>
        </AlbumTitle>
        <TabPanel value="1">
          <Photos i={props.i} />
          {open === false ? undefined : <BasicModal i={props.i} />}
        </TabPanel>
        <TabPanel value="2">
          <LastCourse i={props.i} />
        </TabPanel>
      </TabContext>
    </Box>
  )
}

const Album = (props) => {
  return (
    <AlbumContainer>
      <LabTabs i={props.albumOpen} />
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

const ModalContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
})

const PhotoQuit = styled(Button)({
  color: "white",
  fontSize: 36,
  position: "absolute",
  top: "4%",
  right: "2%",
})

const PhotoModal = styled("img")({
  width: 1163,
  height: 700,
  top: "7%",
  left: "16%",
  position: "absolute",
  objectFit: "scale-down",
  borderRadius: 5,
})

const SlideArrow = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "100vh",
  width: "95vw",
})

const NextArrow = styled(ArrowForwardIosIcon)({
  fontSize: 48,
})

const BackArrow = styled(ArrowBackIosIcon)({
  fontSize: 48,
})
