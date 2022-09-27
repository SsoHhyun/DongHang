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
import { useState, useEffect } from "react"
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft"
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight"
import interceptor from "../../api/interceptor"

// 사이드바

const CourseSide = () => {
  const [open, setOpen] = useState(false)
  const [recommendspot, setRecommendspot] = useState([])

  const [opendialog, setOpendialo] = React.useState(false)

  const handleClickOpen = () => {
    setOpendialo(true)
  }

  const handleClose = () => {
    setOpendialo(false)
  }
  const clickCreateCourse = () => {
    interceptor({
      url: "/api/trip",
      method: "post",
      data: {
        commonNoList: [1, 2, 3],
        endDate: "20181112",
        startDate: "20181113",
        tripName: "test",
      },
    })
      .then((res) => {
        console.log("")
      })
      .catch((err) => {
        alert(err)
      })
  }

  useEffect(() => {
    interceptor({
      url: "/api/trip?tripNo=2&userNo=1",
      method: "get",
    })
      .then((res) => {
        for (let i = 0; i < res.data.placeList.length; i++) {
          setRecommendspot((recommendspot) => [
            ...recommendspot,
            res.data.placeList[i],
          ])
          console.log(res.data)
        }
      })
      .catch((err) => {
        alert(err)
      })
  }, [])

  return (
    <Box>
      {open === true ? (
        <Box>
          <StyledCourseSide>
            {recommendspot.map((placeList, index) => (
              <SideContents
                key={index}
                spot={recommendspot[index]}
              ></SideContents>
            ))}
            <div>
              <Button
                variant="contained"
                color="success"
                style={{
                  position: "sticky",
                  bottom: 0,
                  marginLeft: 132,
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
            </div>
          </StyledCourseSide>
          <ArrowCircleLeftIcon
            onClick={() => {
              setOpen((open) => !open)
            }}
            style={{
              color: "#121212",
              position: "absolute",
              top: "50%",
              left: "20%",
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
  height: "100%",
  backgroundColor: "white",
  position: "absolute",
  overflow: "auto",
  left: "0%",
})
