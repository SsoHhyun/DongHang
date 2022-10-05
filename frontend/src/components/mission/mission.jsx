import { React, useState, useEffect } from "react"
import { Box, styled, Grid, Paper, Button, IconButton } from "@material-ui/core"
import Carousel from "react-material-ui-carousel"
import CameraAltIcon from "@mui/icons-material/CameraAlt"
import RefreshIcon from "@mui/icons-material/Refresh"
import axios from "axios"
import interceptor from "../../api/interceptor"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import ClearIcon from "@mui/icons-material/Clear"
import { setMission } from "../../features/mission/missionSlice"
import { useDispatch, useSelector } from "react-redux"

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

const Mission = (props) => {
  const mission = useSelector((state) => state.mission)
  const dispatch = useDispatch()

  if (props.tripNo !== 0 && mission.length === 0) {
    interceptor({
      url: "/api/mission/trip?tripNo=" + props.tripNo,
      method: "get",
    })
      .then((res) => {
        console.log(res.data)
        dispatch(setMission(res.data))
      })
      .catch((err) => {
        alert(err)
      })
  }

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
    axios
      .get(
        `http://j7a504.p.ssafy.io:8080/api/mission/refresh?missionNo=${missionNo}&tripNo=${props.tripNo}`
      )
      .then((res) => {
        console.log(res)
        axios
          .get(
            "http://j7a504.p.ssafy.io:8080/api/mission/trip?tripNo=" +
              props.tripNo
          )
          .then((res) => {
            dispatch(setMission(res.data))
          })
      })
      .catch((err) => {
        alert(err)
      })
  }

  // delete 함수
  const deleteMission = (missionNo) => {
    axios
      .delete(
        `http://j7a504.p.ssafy.io:8080/api/mission?missionNo=${missionNo}`
      )
      .then((res) => {
        alert("미션이 삭제되었습니다.")
        axios
          .get(
            "http://j7a504.p.ssafy.io:8080/api/mission/trip?tripNo=" +
              props.tripNo
          )
          .then((res) => {
            dispatch(setMission(res.data))
          })
      })
      .catch((err) => {
        alert(err)
      })
  }

  return (
    <MissionBox>
      {mission.map((item, i) => (
        <MissionPaper
          key={i}
          item={item}
          style={
            item.missionCategoryNo === 0
              ? { background: "#d5c0b4" }
              : item.missionCategoryNo === 1
              ? { background: "#f4b37b" }
              : { background: "#BDCFDD" }
          }
        >
          <MissionTypeBox>
            {item.missionCategoryNo === 0 ? (
              <Typography>mission</Typography>
            ) : item.missionCategoryNo === 1 ? (
              <Typography>special mission</Typography>
            ) : (
              <Typography>custom mission</Typography>
            )}
            {item.missionCategoryNo === 2 ? (
              <IconButton onClick={() => deleteMission(item.missionNo)}>
                <ClearIcon />
              </IconButton>
            ) : (
              <IconButton onClick={() => rerollMission(item.missionNo)}>
                <RefreshIcon />
              </IconButton>
            )}
          </MissionTypeBox>
          <ContentBox>
            <Box>{item.content}</Box>
            <Button
              style={{ fontFamily: "HallymGothic-Regular" }}
              onClick={handlePhotoOpen}
              endIcon={<CameraAltIcon />}
            >
              미션 완료
            </Button>
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
        </MissionPaper>
      ))}
    </MissionBox>
  )
}

export default Mission

const MissionBox = styled(Box)({
  background: "#faf8f7",
  padding: "2px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontFamily: "HallymGothic-Regular",
  height: "60vh",
  overflow: "auto",
  borderRadius: "10px",
})

const MissionPaper = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "1%",
  borderRadius: "10px",
  width: "95%",
  padding: "2%",
})

const MissionTypeBox = styled(Box)({
  width: "15%",
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
