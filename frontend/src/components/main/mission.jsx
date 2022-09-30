import { React, useState } from "react"
import { Box, styled, Grid, Paper, Button, IconButton, DialogTitle, DialogContent, DialogContentText, TextField,DialogActions } from "@material-ui/core"
import Carousel from "react-material-ui-carousel"
import CameraAltIcon from "@mui/icons-material/CameraAlt"
import RefreshIcon from "@mui/icons-material/Refresh"
import axios from "axios"
import interceptor from "../../api/interceptor"
import { FlashlightOnTwoTone } from "@mui/icons-material"
import { Dialog } from "@mui/material"
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

//custom mission을 위한 리스트

const Mission = () => {
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
        .then((res) => {})
        .catch((err) => {
          alert(err)
        })
    }
  }

  //커스텀 미션 생성 모달 열기
  const [modalOpen, setModalOpen] = useState(false);
  
  const handleOpenCustomMission =() =>{
    setModalOpen(true);
  }
  const handleCloseCustomMission =()=>{
    setCumstonMission("");
    setModalOpen(false);
  }
  //커스텀 미션 생성
  const [customMission, setCumstonMission] = useState();
  
  const customMissionSubmit = async() =>{
    handleCloseCustomMission();
    interceptor({
      url: "",
      // url: "/mission",
      method: "post",
      data:{
        content:customMission,
        type:"custom"
      }
    })
      .then((res) => {

        handleCloseCustomMission();
      })
      .catch((err) => {
        alert(err)
      })

  }

  return (
    <Box>
      <IconButton onClick={() => rerollMission()}>
        <RefreshIcon />
      </IconButton>
      
      <Button onClick={()=>handleOpenCustomMission()}>
        커스텀 미션 생성하기
      </Button>

      <Dialog open={modalOpen} onClose={handleCloseCustomMission}>
        <DialogTitle>커스텀 미션 </DialogTitle>
        <DialogContent
        style={{width:'400px'}}
        >
          {/* <DialogContentText></DialogContentText> */}

          <from onSubmit={customMissionSubmit} id="createCustom">
          <TextField
          autoFocus
          margin="dense"
          id="description"
          label="미션 설정"
          type="text"
          fullWidth
          variant="standard"
          value={customMission}
          onChange={(e)=>setCumstonMission(e.target.value)}
          />
          </from>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseCustomMission}>Cancel</Button>
          <Button onClick={customMissionSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>

      <Paper>
        {mission.map((item, i) => (
          <Paper key={i} item={item}>
            <Box>{item.name}</Box>
            <ContentBox>
              <Box>{item.description}</Box>
              <IconButton>
                <input
                  type="file"
                  id="imgupload"
                  accept="image/*"
                  onChange={onChangeImg}
                  style={{ display: "none" }}
                />
                <CameraAltIcon />
              </IconButton>
            </ContentBox>
          </Paper>
        ))}
        {/* {newCustomMission.map((item, i) => (
          <Paper key={i} item={item}>
            <Box>{item.name}</Box>
            <ContentBox>
              <Box>{item.description}</Box>
              <IconButton>
                <input
                  type="file"
                  id="imgupload"
                  accept="image/*"
                  onChange={onChangeImg}
                  style={{ display: "none" }}
                />
                <CameraAltIcon />
              </IconButton>
            </ContentBox>
          </Paper>
        ))} */}
      </Paper>
    </Box>
  )
}

export default Mission

const CarouselPaper = styled(Paper)({
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
})
