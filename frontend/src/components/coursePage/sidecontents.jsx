import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import React from "react"
import SpotDetail from "./spotdetail"
import { Modal } from "@mui/material"

//코스관련 사이드바 내부 컨텐츠

const SideContents = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          여행일정장소
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          주소
        </Typography>
        <Typography variant="body2">
          상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명
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
export default SideContents
