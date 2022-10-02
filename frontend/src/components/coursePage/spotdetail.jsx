import React from "react"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"

//장소 상세 모달
const SpotDetail = (props) => {
  return (
    <Card
      style={{
        width: "50%",
        height: "70%",
        overflow: "auto",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: `translate(-50%, -50%)`,
      }}
      onClick={() => console.log(props)}
    >
      <CardHeader
        title={props.spot.title}
        subheader={props.spot.addr1 + " " + props.spot.addr2}
      />
      <CardMedia
        component="img"
        height="400"
        image={props.spot.firstImage1}
        alt="여행지 소개 사진"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          상세설명
        </Typography>
        <hr></hr>
        <Typography variant="body2" color="text.secondary">
          좋은여행지입니다좋은여행지입니다좋은여행지입니다좋은여행지입니다좋은여행지입니다좋은여행지입니다좋은여행지입니다좋은여행지입니다좋은여행지입니다좋은여행지입니다좋은여행지입니다좋은여행지입니다좋은여행지입니다
        </Typography>
      </CardContent>
    </Card>
  )
}
export default SpotDetail
