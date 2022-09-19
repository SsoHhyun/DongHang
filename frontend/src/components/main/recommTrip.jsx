import * as React from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import multicampus from "../../assets/image/multicampus.jpg"

const RecommTripCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="multicampus"
        height="140"
        image={multicampus}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          멀티캠퍼스 역삼
        </Typography>
        <Typography variant="body2" color="text.secondary">
          싸피인들의 애환이 담긴 곳
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}

export default RecommTripCard
