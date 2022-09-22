import React from "react"
import SpotDetail from "./spotdetail"
import {
  Dialog,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material"
import AdjustIcon from "@mui/icons-material/Adjust"
//코스관련 사이드바 내부 컨텐츠
import interceptor from "../../api/interceptor"

const SideContents = () => {
  const [open, setOpen] = React.useState(false)
  const spot = {
    name: "여행일정장소",
    adress: "어쩌구구어쩌구동",
    lat: "34.11231",
    lng: "121.547874",
  }

  const handleClickOpen = () => {
    setOpen(true)
    interceptor({
      url: "/user/",
      method: "get",
    })
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        alert(err)
      })
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <AdjustIcon></AdjustIcon>
        <Typography variant="h7" component="div">
          {spot.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {spot.adress}
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
    </Card>
  )
}
export default SideContents
