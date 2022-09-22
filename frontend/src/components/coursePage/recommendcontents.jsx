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
  Button,
} from "@mui/material"
import SpotDetail from "./spotdetail"
import interceptor from "../../api/interceptor"

const RecommendContents = () => {
  const [open, setOpen] = React.useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const test = () => {
    interceptor({
      url: "/user/",
      method: "get",
    })
      .then((res) => {})
      .catch((err) => {
        alert(err)
      })
  }
  return (
    <StyledCard>
      <CardMedia
        component="img"
        image={process.env.PUBLIC_URL + `/img/d4.jpg`}
        alt="green iguana"
        height="100"
      />
      <CardContent>
        <Typography gutterBottom variant="h7" component="div">
          여행지이름
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleClickOpen}>자세히 보기</Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <SpotDetail></SpotDetail>
        </Dialog>
      </CardActions>
    </StyledCard>
  )
}
export default RecommendContents

const StyledCard = styled(Card)({
  width: "200px",
  marginRight: "1rem",
  flex: "0 0 auto",
})
