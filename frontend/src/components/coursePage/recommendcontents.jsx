//코스관련 추천(하단)바 내부 컨텐츠

import React from "react"
import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  styled,
  Dialog,
  Typography,
  CardActionArea,
} from "@mui/material"
import SpotDetail from "./spotdetail"

const RecommendContents = (props) => {
  const [open, setOpen] = React.useState(false)

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <StyledCard
      onClick={() => {
        props.addCourseList(props.spot)
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
        <CardActions>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <SpotDetail></SpotDetail>
          </Dialog>
        </CardActions>
      </CardActionArea>
    </StyledCard>
  )
}
export default RecommendContents

const StyledCard = styled(Card)({
  width: "200px",
  marginRight: "1rem",
  flex: "0 0 auto",
})
