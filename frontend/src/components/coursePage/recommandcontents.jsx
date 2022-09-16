//코스관련 추천(하단)바 내부 컨텐츠

import React from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { Modal } from "@mui/material"
import SpotDetail from "./spotdetail"

const RecommandContents = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <Card sx={{ maxWidth: 345 }} style={{ float: "left" }}>
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
        <Typography variant="body2" color="text.secondary">
          상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleOpen}>자세히 보기</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <SpotDetail></SpotDetail>
        </Modal>
      </CardActions>
    </Card>
  )
}
export default RecommandContents
