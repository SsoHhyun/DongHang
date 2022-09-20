//코스관련 추천(하단)바 내부 컨텐츠

import React from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import SpotDetail from "./spotdetail"
import { styled } from "@mui/material"
import { Dialog } from "@mui/material"

const RecommandContents = () => {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const StyledCard = styled(Card)({
    float: "left",
    width: "240px",
    display: "inline-block",
  })

  return (
    <StyledCard>
      <CardMedia
        component="img"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
        width="240px"
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
export default RecommandContents
