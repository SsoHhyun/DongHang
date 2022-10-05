import React from "react"
import SpotDetail from "./spotdetail"
import {
  Dialog,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  CardMedia,
} from "@mui/material"
import ClearIcon from "@mui/icons-material/Clear"
//코스관련 사이드바 내부 컨텐츠

const SideContents = (props) => {
  return (
    <Card
      sx={{
        minWidth: 275,
        marginBottom: "2px",
        display: "inline-flex",
        height: "170px",
      }}
      style={{ position: "relative", width: "18vw" }}
    >
      {props.spot.firstImage1 === "" ? (
        <CardMedia
          component="img"
          image="../img/kyeongju.jpg"
          alt="image not found"
          style={{ height: "100%", width: "50%" }}
        />
      ) : (
        <CardMedia
          component="img"
          image={props.spot.firstImage1}
          alt="image not found"
          style={{ height: "100%", width: "50%" }}
        />
      )}
      <CardContent
        style={{ width: "50%" }}
        onClick={() => {
          props.setSelectedSpot(props.spot)
        }}
      >
        <Typography variant="h7" component="div">
          <p style={{ fontSize: "12px", textAlign: "left" }}>
            {props.spotIndex + 1}번째 여행지
          </p>
          <p style={{ fontSize: "14px", textAlign: "right" }}>
            {props.spot.title}
          </p>
        </Typography>
        <Typography
          sx={{ mb: 1.5 }}
          color="text.secondary"
          style={{ fontSize: "11px", textAlign: "right" }}
        >
          {props.spot.addr1 + " " + props.spot.addr2}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          style={{
            top: "2px",
            right: "2px",
            zIndex: 2,
            position: "absolute",
          }}
          onClick={() => {
            props.deleteCourse(props.spotIndex)
          }}
        >
          <ClearIcon style={{ color: "red" }}></ClearIcon>
        </Button>
      </CardActions>
    </Card>
  )
}
export default SideContents
