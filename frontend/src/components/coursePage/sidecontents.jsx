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
import ClearIcon from "@mui/icons-material/Clear"
//코스관련 사이드바 내부 컨텐츠

const SideContents = (props) => {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <AdjustIcon></AdjustIcon>
        <ClearIcon></ClearIcon>
        <Typography variant="h7" component="div">
          {props.spot.title}
        </Typography>
        <Typography
          sx={{ mb: 1.5 }}
          color="text.secondary"
          style={{ fontSize: "13px" }}
        >
          {props.spot.addr1 + " " + props.spot.addr2}
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
