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
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft"
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight"
import interceptor from "../../api/interceptor"
// import Timeline from "@mui/lab/Timeline"
// import TimelineItem from "@mui/lab/TimelineItem"
// import TimelineSeparator from "@mui/lab/TimelineSeparator"
// import TimelineConnector from "@mui/lab/TimelineConnector"
// import TimelineContent from "@mui/lab/TimelineContent"
// import TimelineDot from "@mui/lab/TimelineDot"

// 사이드바

const CourseSide = (props) => {
  const [open, setOpen] = useState(false)
  const [opendialog, setOpendialo] = React.useState(false)

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
        endDate: "20181112",
        startDate: "20181113",
        tripName: "test",
      },
    })
      .then((res) => {})
      .catch((err) => {
        alert(err)
      })
  }

  return (
    <Box>
      {open === true ? (
        <Box
          style={{
            backgroundColor: "white",
            height: "100vh",
            width: "20vw",
            position: "absolute",
          }}
        >
          <StyledCourseSide>
            {props.recommendspot.map((placeList, index) => (
              <SideContents
                key={index}
                spotIndex={index}
                spot={props.recommendspot[index]}
                deleteCourse={props.deleteCourse}
              ></SideContents>
            ))}
            {/* <Timeline>
              {props.recommendspot.map((placeList, index) => (
                <TimelineItem
                  key={index}
                  spotIndex={index}
                  spot={props.recommendspot[index]}
                  deleteCourse={props.deleteCourse}
                >
                  <TimelineSeparator>
                    <TimelineDot />
                    {props.recommendspot.length !== index ? (
                      <TimelineConnector />
                    ) : undefined}
                  </TimelineSeparator>
                  <TimelineContent>
                    {props.recommendspot[index].title}
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline> */}
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
          <ArrowCircleLeftIcon
            onClick={() => {
              setOpen((open) => !open)
            }}
            style={{
              color: "#121212",
              position: "absolute",
              top: "50%",
              left: "105%",
            }}
          ></ArrowCircleLeftIcon>
        </Box>
      ) : (
        <Box>
          <ArrowCircleRightIcon
            onClick={() => {
              setOpen((open) => !open)
            }}
            style={{
              position: "absolute",
              top: "50%",
              color: "#121212",
            }}
          ></ArrowCircleRightIcon>
        </Box>
      )}
    </Box>
  )
}
export default CourseSide

const StyledCourseSide = styled(Box)({
  width: "20vw",
  height: "85vh",
  backgroundColor: "white",
  overflow: "auto",
  left: "0%",
  position: "absolute",
})
