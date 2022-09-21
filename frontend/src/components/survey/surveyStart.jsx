import React from "react"
import { Box, styled } from "@material-ui/core"

// 취향설문 질문

const questionList = [
  "좋았던 국내 여행지는 어디였나요?",
  "선호하는 여행 스타일과 가장 가까운 것을 골라주세요.",
  "유적지나 예술 작품 보러 갈까요?",
  "더 많은 시간을 보내고 싶은 곳을 골라주세요.",
  "가고 싶은 여행지 분위기를 알려주세요",
  "액티비티나 레포츠는 어떤가요?",
  "쇼핑 갈까요?",
  "나이대가 어떻게 되시나요?",
]

const Question = () => {
  return (
    <Box>
      {/* {questionList.map((question, index) => (
        <span key={index}>
          {index + 1}. {question}
          <br />
        </span>
      ))} */}
      1. {questionList[0]}
    </Box>
  )
}
export default Question
