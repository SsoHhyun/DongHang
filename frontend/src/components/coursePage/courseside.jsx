import { Box } from "@material-ui/core"
import React from "react"
import SideContents from "./sidecontents"
import {
  styled,
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material"
import { useState } from "react"

import interceptor from "../../api/interceptor"
import TextField from "@mui/material/TextField"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"

// 사이드바

const CourseSide = (props) => {
  const [opendialog, setOpendialo] = React.useState(false)
  const [startDate, setStartDate] = React.useState(null)
  const [endDate, setEndDate] = React.useState(null)

  const parseDate = (newValue) => {
    if (newValue == null) return "0"
    let temp = newValue.$d.getFullYear().toString()
    if (newValue.$d.getMonth() < 9) {
      temp = temp + "0" + (newValue.$d.getMonth() + 1).toString()
    } else {
      temp = temp + (newValue.$d.getMonth() + 1).toString()
    }
    if (newValue.$d.getDate() < 10) {
      temp = temp + "0" + newValue.$d.getDate().toString()
    } else {
      temp = temp + newValue.$d.getDate().toString()
    }
    return temp
  }
  const handleClickOpen = () => {
    setOpendialo(true)
  }
  const handleClose = () => {
    setOpendialo(false)
  }
  const clickCreateCourse = () => {
    const commonNoList = []
    for (let i = 0; i < props.recommendspot.length; i++) {
      commonNoList.push(props.recommendspot[i].commonNo)
    }
    interceptor({
      url: "/api/trip",
      method: "post",
      data: {
        commonNoList: commonNoList,
        endDate: endDate,
        startDate: startDate,
        tripName: "test",
      },
    })
      .then((res) => {
        console.log("createsuccess")
      })
      .catch((err) => {
        alert(err)
      })
  }

  return (
    <Box>
      <Box
        style={{
          backgroundColor: "white",
          height: "92vh",
          width: "20vw",
          position: "absolute",
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            Fullwidth
            label="출발 날짜"
            value={startDate}
            onChange={(newValue) => {
              setStartDate(parseDate(newValue))
              console.log(startDate)
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                style={{ marginBottom: "15px" }}
              />
            )}
          />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="마지막 날짜"
            value={endDate}
            onChange={(newValue) => {
              setEndDate(parseDate(newValue))
              console.log(endDate)
            }}
            renderInput={(params) => <TextField {...params} fullWidth />}
          />
        </LocalizationProvider>
        <StyledCourseSide>
          {props.recommendspot.map((placeList, index) => (
            <SideContents
              key={index}
              spotIndex={index}
              spot={props.recommendspot[index]}
              deleteCourse={props.deleteCourse}
              setSelectedSpot={props.setSelectedSpot}
            ></SideContents>
          ))}
        </StyledCourseSide>
        <Box>
          <Button
            variant="contained"
            color="success"
            style={{
              position: "absolute",
              bottom: 0,
              marginBottom: "5%",
              left: "35%",
            }}
            onClick={handleClickOpen}
          >
            일정생성
          </Button>
          <Dialog
            open={opendialog}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"일정생성"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                일정을 이대로 생성하시겠습니까?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => {
                  handleClose()
                  clickCreateCourse()
                }}
              >
                생성
              </Button>
              <Button onClick={handleClose} autoFocus>
                취소
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Box>
    </Box>
  )
}
export default CourseSide

const StyledCourseSide = styled(Box)({
  width: "20vw",
  height: "70vh",
  backgroundColor: "white",
  overflow: "auto",
  left: "0%",
  position: "absolute",
})
