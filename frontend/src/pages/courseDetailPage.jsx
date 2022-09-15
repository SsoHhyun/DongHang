//여행 일정 상세 페이지
import { Box } from "@material-ui/core"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Map from "../components/map"
import React from "react"
import Navbar from "../components/navbar"
import SpotDetail from "../components/spotDetail"
import { Modal } from "@mui/material"
const Side = () => {
  const navbarHeight = "60px"
  //상세페이지 사이드바
  return (
    <Box
      style={{
        width: "20%",
        height: "100%",
        backgroundColor: "white",
        position: "absolute",
        overflow: "auto",
      }}
    >
      <Sidecontents></Sidecontents>
      <Sidecontents></Sidecontents>
      <Sidecontents></Sidecontents>
      <Sidecontents></Sidecontents>
      <Sidecontents></Sidecontents>
      <Sidecontents></Sidecontents>
    </Box>
  )
}
const Sidecontents = () => {
  //사이드바 컨텐츠
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

const CourseDetailPage = () => {
  return (
    <Box>
      <Navbar></Navbar>
      <Box>
        <Map></Map>
        <Side></Side>
      </Box>
    </Box>
  )
}
export default CourseDetailPage
