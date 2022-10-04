import { React, useState, useEffect } from "react"
import { Box, styled, Grid, Paper, Button, IconButton } from "@material-ui/core"
import Carousel from "react-material-ui-carousel"
import CameraAltIcon from "@mui/icons-material/CameraAlt"
import RefreshIcon from "@mui/icons-material/Refresh"
import axios from "axios"
import interceptor from "../../api/interceptor"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import CreateMission from "./missionCreate"

// const MissionGrid = styled(Grid)({
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
// })

// const MissionBox = styled(Box)({
//   background: "yellow",
//   width: "70%",
//   borderRadius: 20,
//   textAlign: "center",
//   margin: 10,
// })

// reroll button onclick -> get numbers 함수 -> 숫자 세개 나옴 ->
// 그 숫자를 다시 인덱스로 넣어줌

// mission 임시로 넣어둔 리스트

const Mission = (props) => {
  const [mission, setMission] = useState([])

  if (props.tripNo !== 0 && mission.length === 0) {
    interceptor({
      url: "/api/mission/trip?tripNo=" + props.tripNo,
      method: "get",
    })
      .then((res) => {
        console.log(res.data)
        setMission(res.data)
      })
      .catch((err) => {
        alert(err)
      })
  }

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [photoOpen, setPhotoOpen] = useState(false)
  const handlePhotoOpen = () => setPhotoOpen(true)
  const handlePhotoClose = () => setPhotoOpen(false)

  const [selectImages, setSelectImages] = useState()
  const onClickImageHandler = (e) => {
    e.preventDefault()
    const url =
      "http://j7a504.p.ssafy.io:8080/upload/trip/?tripNo=" + props.tripNo
    console.log(selectImages)
    const formData = new FormData()
    formData.append("images", selectImages)

    const config = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: "Bearer " + localStorage.getItem("access-token"),
      },
    }
    axios.post(url, formData, config).then((res) => {
      console.log(res.data)
    })
  }
  const fileChangeHandler = (e) => {
    const files = e.target.files[0]
    setSelectImages(files)
  }

  // reroll 함수
  const rerollMission = (missionNo) => {
    console.log(missionNo, props.tripNo)
    axios.get(
      `http://j7a504.p.ssafy.io/api/mission/refresh?missionNo=${missionNo}&tripNo=${props.tripNo}`
    )
      .then((res) => {
        console.log(res)
        axios.get(
          "http://j7a504.p.ssafy.io/api/mission/trip?tripNo=" +
            props.tripNo
        ).then((res) => {
          setMission(res.data)
        })
      })
      .catch((err) => {
        alert(err)
      })
  }

  return (
    <MissionBox>
      <Box>
        {mission.map((item, i) => (
          <Paper key={i} item={item}>
            <Box>
              {item.missionCategoryNo === 0
                ? "mission"
                : item.missionCategoryNo === 1
                ? "special mission"
                : "custom mission"}
            </Box>
            {item.missionCategoryNo === 2 ? null : (
              <IconButton onClick={() => rerollMission(item.missionNo)}>
                <RefreshIcon />
              </IconButton>
            )}
            <ContentBox>
              <Box>{item.content}</Box>
              <IconButton onClick={handlePhotoOpen}>
                <CameraAltIcon />
              </IconButton>
              <Modal
                open={photoOpen}
                onClose={handlePhotoClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <PhotoModalBox>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={fileChangeHandler}
                  />
                  <Button onClick={onClickImageHandler}>업로드 하기</Button>
                </PhotoModalBox>
              </Modal>
            </ContentBox>
          </Paper>
        ))}
      </Box>
      <Button onClick={handleOpen}>Create Custom Mission</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalBox>
          <CreateMission
            tripNo={props.tripNo}
            setOpen={setOpen}
          ></CreateMission>
        </ModalBox>
      </Modal>
    </MissionBox>
  )
}

export default Mission

const MissionBox = styled(Box)({
  background: "#f4b37b",
  padding: "2px",
})

const ContentBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.2em",
  height: "100px",
  width: "80%",
})

const ModalBox = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: "24",
  p: "4",
  background: "white",
})

const PhotoModalBox = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "200px",
  height: "100px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: "24",
  p: "4",
  background: "white",
})
