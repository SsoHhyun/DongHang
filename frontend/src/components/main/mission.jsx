import { React, useState } from "react"
import { Box, styled, Grid, Paper, Button, IconButton } from "@material-ui/core"
import Carousel from "react-material-ui-carousel"
import CameraAltIcon from "@mui/icons-material/CameraAlt"
import RefreshIcon from "@mui/icons-material/Refresh"

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
var items = [
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
  return (
    <Box>
      <IconButton>
        <RefreshIcon />
      </IconButton>
      <Carousel background="#f4b37b">
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </Box>
  )
}

function Item(props) {
  return (
    <CarouselPaper>
      <h2>{props.item.name}</h2>
      <ContentBox>
        <p>{props.item.description}</p>

        <IconButton>
          <CameraAltIcon />
        </IconButton>
      </ContentBox>
    </CarouselPaper>
  )
}

export default Mission

const CarouselPaper = styled(Paper)({
  background: "#f4b37b",
  padding: "3%",
})

const ContentBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.2em",
})
