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
    <Card
      sx={{
        minWidth: 275,
        marginBottom: "1px",
        borderRadius: "1rem",
      }}
      variant="outlined"
      style={{ backgroundColor: "white" }}
    >
      <Button
        style={{ float: "right", marginTop: "10px" }}
        onClick={() => {
          props.deleteCourse(props.spotIndex)
        }}
      >
        <ClearIcon style={{ color: "red" }}></ClearIcon>
      </Button>
      <CardContent
        onClick={() => {
          props.setSelectedSpot(props.spot)
        }}
      >
        <Typography variant="h7" component="div">
          <p style={{ fontSize: "12px" }}>{props.spotIndex + 1}번째 여행지</p>
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
          <SpotDetail spot={props.spot}></SpotDetail>
        </Dialog>
      </CardActions>
    </Card>
  )
}
export default SideContents
