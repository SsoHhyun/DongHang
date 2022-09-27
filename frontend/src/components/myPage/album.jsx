import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
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
} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LastCourse from "./lastCourse";
import {
  setClose,
  setImgIndex,
  setOpen,
  nextImg,
  previousImg,
} from "../../app/store";

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
];

const Photos = () => {
  const dispatch = useDispatch();

  return (
    <ImageList
      sx={{ width: "100%", height: "70vh" }}
      cols={4}
      rowHeight={"auto"}
    >
      {itemData.map((item, i) => (
        <MyPhoto key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
            style={{ borderRadius: 4 }}
            onClick={() => {
              dispatch(setOpen());
              dispatch(setImgIndex(i));
            }}
          />
        </MyPhoto>
      ))}
    </ImageList>
  );
};

const BasicModal = () => {
  const open = useSelector((state) => state.open);
  const imgIndex = useSelector((state) => state.imgIndex);
  const dispatch = useDispatch();
  const handleClose = () => dispatch(setClose());
  const handleNext = () => dispatch(nextImg());
  const handleBack = () => dispatch(previousImg());
  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <ModalContainer>
          <PhotoQuit onClick={handleClose}>✖</PhotoQuit>
          <PhotoModal src={itemData[imgIndex].img} />
          {imgIndex === 0 || imgIndex === itemData.length ? (
            imgIndex === 0 ? (
              <SlideArrow>
                <BackArrow sx={{ color: "disabled" }} />
                <NextArrow onClick={handleNext} />
              </SlideArrow>
            ) : (
              <SlideArrow>
                <BackArrow onClick={handleBack} />
                <NextArrow sx={{ color: "disabled" }} />
              </SlideArrow>
            )
          ) : (
            <SlideArrow>
              <BackArrow onClick={handleBack} />
              <NextArrow onClick={handleNext} />
            </SlideArrow>
          )}
        </ModalContainer>
      </Modal>
    </div>
  );
};

function LabTabs() {
  const [value, setValue] = useState("1");
  const open = useSelector((state) => state.open);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
          {open === false ? undefined : <BasicModal />}
        </TabPanel>
        <TabPanel value="2">
          <LastCourse />
        </TabPanel>
      </TabContext>
    </Box>
  );
}

const Album = () => {
  return (
    <AlbumContainer>
      <LabTabs />
    </AlbumContainer>
  );
};

export default Album;

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
});

const AlbumTitle = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const AlbumName = styled(Typography)({
  textAlign: "center",
  fontSize: 30,
  color: "brown",
  fontWeight: "bold",
});

const Period = styled(Typography)({
  textAlign: "center",
  fontSize: 16,
  color: "grey",
});

const MyPhoto = styled(ImageListItem)({
  margin: 3,
});

const ModalContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const PhotoQuit = styled(Button)({
  color: "white",
  fontSize: 36,
  position: "absolute",
  top: "4%",
  right: "2%",
});

const PhotoModal = styled("img")({
  width: 1163,
  height: 700,
  top: "7%",
  left: "16%",
  position: "absolute",
  objectFit: "scale-down",
});

const SlideArrow = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "100vh",
  width: "95vw",
});

const NextArrow = styled(ArrowForwardIosIcon)({
  color: "white",
  fontSize: 48,
});

const BackArrow = styled(ArrowBackIosIcon)({
  color: "white",
  fontSize: 48,
});
