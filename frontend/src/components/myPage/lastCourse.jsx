// 지난 여행 코스(탭)
import React from "react"
import { useState } from "react"
import {
  Box,
  Button,
  Paper,
  styled,
  Typography,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  CardActionArea,
} from "@mui/material"
import { useSelector } from "react-redux/es/exports"
import Map from "../map"

//지도
const RecommendContents = (props) => {
  return (
    <StyledCard
      onClick={() => {
        props.setSelectedSpot({
          title: props.spot.title,
          mapx: props.spot.mapx,
          mapy: props.spot.mapy,
        })
        console.log(props.selectedSpot)
      }}
    >
      <CardActionArea>
        {props.spot.firstImage1 === "" ? (
          <CardMedia
            component="img"
            image="../img/kyeongju.jpg"
            alt="image not found"
            height="100"
          />
        ) : (
          <CardMedia
            component="img"
            image={props.spot.firstImage1}
            alt="image not found"
            height="100"
          />
        )}

        <CardContent>
          <Typography
            gutterBottom
            variant="h7"
            component="div"
            style={{ textOverflow: "ellipsis", width: "80px" }}
          >
            {props.spot.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  )
}
const LastCourse = (props) => {
  const tripInfo = useSelector((state) => state.lastTrips)
  const [level, setLevel] = useState(3)
  const [currentSpot, setCurrentSpot] = useState({
    mapy1: "37.49817473153595",
    mapy2: "37.51783576502551",
    mapx1: "127.03121197537305",
    mapx2: "127.07049421820354",
  })

  const [selectedSpot, setSelectedSpot] = useState({
    title: tripInfo[props.i].placeList[0].title,
    mapy: tripInfo[props.i].placeList[0].mapy,
    mapx: tripInfo[props.i].placeList[0].mapx,
  })

  return (
    <LastCourseContainer>
      <MapContainer id="map">
        <Map
          recommendspot={tripInfo[props.i].placeList}
          selectedSpot={selectedSpot}
          setCurrentSpot={setCurrentSpot}
          setSelectedSpot={setSelectedSpot}
          level={level}
          setLevel={setLevel}
        />
      </MapContainer>
      <MySpots>
        {tripInfo[props.i].placeList.map((user, index) => (
          <RecommendContents
            spot={user}
            key={index}
            setSelectedSpot={setSelectedSpot}
          ></RecommendContents>
        ))}
      </MySpots>
    </LastCourseContainer>
  )
}

export default LastCourse

const LastCourseContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItem: "center",
  width: "50vw",
  height: "74vh",
})

const MapContainer = styled(Box)({
  width: "100%",
  height: "200%",
  top: 0,
})

const MySpots = styled(Box)({
  width: "100%",
  height: "100%",
  display: "flex",
  overflow: "auto",
  whiteSpace: "nowrap",
})
const StyledCard = styled(Card)({
  width: "200px",
  marginRight: "1rem",
  flex: "0 0 auto",
  height: "200px",
  marginTop: "1rem",
})
