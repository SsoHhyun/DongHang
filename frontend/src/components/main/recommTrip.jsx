import * as React from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

const RecommTripCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="multicampus"
        height="140"
        image="https://www.google.com/maps/uv?pb=!1s0x357ca3ff67128961%3A0x55a56e8ffc5bc5d!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNp2xyUxNF-q1wp7e2qKeuH-aS3wEtb4zTKq8KZ%3Dw240-h160-k-no!5z66mA7Yuw7Lqg7Y287IqkIOyXreyCvCAtIEdvb2dsZSDqsoDsg4k!15sCgIgAQ&imagekey=!1e10!2sAF1QipNp2xyUxNF-q1wp7e2qKeuH-aS3wEtb4zTKq8KZ&hl=ko&sa=X&ved=2ahUKEwjg1fSHnZb6AhUHA94KHV-rBxUQoip6BAhOEAM#.jpg"
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
