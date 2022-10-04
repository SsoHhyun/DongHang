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
var missions = [
  {
    name: "Special Mission",
    description: "부모님과 단풍잎 주워서 책갈피 만들기",
  },
  {
    name: "Mission",
    description: "부모님과 서로 가장 좋아하는 노래 소개시켜 주기",
  },
  {
    name: "Mission",
    description: "함께 눈사람 만들기",
  },
  {
    name: "Mission",
    description: "벚나무 밑에서 사진 찍기",
  },
  {
    name: "Mission",
    description: "시원한 물에 발 담그기",
  },
  {
    name: "Mission",
    description: "아이스크림 걸고 고스톱 내기",
  },
  {
    name: "Mission",
    description: "부모님 손 잡고 걷기",
  },
  {
    name: "Mission",
    description: "배에서 낚시 해보기",
  },
  {
    name: "Mission",
    description: "첨성대와 함께 찰칵",
  },
  {
    name: "Mission",
    description: "최초로 커스텀 미션 추가",
  },
]

const Mission = () => {
  // useEffect(() => {
  //   interceptor({
  //     url: "/api/mission/trip",
  //     method: "get",
  //   })
  //     .then((res) => {
  //       console.log(res.data)
  //     })
  //     .catch((err) => {
  //       alert(err)
  //     })
  // }, [])
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [photoOpen, setPhotoOpen] = useState(false)
  const handlePhotoOpen = () => setPhotoOpen(true)
  const handlePhotoClose = () => setPhotoOpen(false)

  const recommendMission = function (arr) {
    const randomSet = new Set()
    let flag = true
    const resultArr = []

    // 랜덤한 숫자 뽑아오기
    function rand(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    }

    while (flag) {
      randomSet.add(rand(0, arr.length - 1))
      if (randomSet.size == 3) {
        flag = false
      }
    }

    for (let item of randomSet) {
      resultArr.push(arr[item])
    }

    return resultArr
  }

  // 미션 새로고침
  const [mission, setMission] = useState(recommendMission(missions))
  const rerollMission = () => {
    setMission(recommendMission(missions))
  }

  // 이미지 업로드 함수
  const onChangeImg = async (e) => {
    e.preventDefault()

    if (e.target.files) {
      const uploadFile = e.target.files[0]
      console.log(uploadFile)
      const formData = new FormData()
      formData.append("files", uploadFile)
      console.log(formData)
      interceptor({
        url: "​/upload​/trip?tripNo=",
        // + tripno,
        method: "post",
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
        .then((res) => {
          console.log(res.data)
        })
        .catch((err) => {
          alert(err)
        })
    }
  }

  return (
    <MissionBox>
      <IconButton onClick={() => rerollMission()}>
        <RefreshIcon />
      </IconButton>
      <Box>
        {mission.map((item, i) => (
          <Paper key={i} item={item}>
            <Box>{item.name}</Box>
            <ContentBox>
              <Box>{item.description}</Box>
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
                  <input type="file" />
                  <Button>인증</Button>
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
          <CreateMission></CreateMission>
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
