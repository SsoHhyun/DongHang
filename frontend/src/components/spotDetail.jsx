//장소 상세 페이지
import React from "react"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import Avatar from "@mui/material/Avatar"
import Typography from "@mui/material/Typography"
import { red } from "@mui/material/colors"

const SpotDetail = () => {
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

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
    >
      <CardHeader title="여행일정장소" subheader="여행상세주소" />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
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
