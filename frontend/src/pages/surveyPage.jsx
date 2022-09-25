import { React, useState } from "react"
import { Box, Button, styled, Typography } from "@material-ui/core"
import SurveyEnd from "../components/survey/surveyEnd"
import SurveyStart from "../components/survey/surveyStart"

// 취향설문 페이지

// 질문리스트
const questionList = [
  "좋았던 국내 여행지는 어디였나요?",
  "선호하는 여행 스타일과 가장 가까운 것을 골라주세요.",
  "유적지나 예술 작품 보러 가실래요?",
  "더 많은 시간을 보내고 싶은 곳을 골라주세요.",
  "가고 싶은 여행지 분위기를 알려주세요",
  "액티비티나 레포츠는 어떤가요?",
  "쇼핑 갈까요?",
  "나이대가 어떻게 되시나요?",
]

const SurveyPage = () => {
  const [page, setPage] = useState(0)
  const [number, setNumber] = useState(1)
  const [end, setEnd] = useState(false)
  const [start, setStart] = useState(false)

  const nextPage = () => {
    setPage(page + 1)
    setNumber(number + 1)
  }

  const prevPage = () => {
    setPage(page - 1)
    setNumber(number - 1)
  }

  const surveyEnd = () => {
    setEnd(true)
  }

  const surveyStart = () => {
    setStart(true)
  }

  return (
    <Background>
      {start === false ? (
        <Box>
          <SurveyStart></SurveyStart>
          <Button onClick={surveyStart}>시작하기!</Button>
        </Box>
      ) : (
        <SurveyBox>
          {end === false ? (
            <Box>
              <h1>Survey page</h1>
              <QuestionBox>
                {number}. {questionList[page]}
              </QuestionBox>
              <ButtonBox>
                <SurveyButton>예</SurveyButton>
                <SurveyButton>아니오</SurveyButton>
              </ButtonBox>

              <FooterBox>
                <PageBox>{number} / 8</PageBox>
                {page === 0 ? (
                  <Box>
                    <Box width="20%" marginRight="2%"></Box>
                    <NextButton onClick={nextPage}>Next</NextButton>
                  </Box>
                ) : null}
                {page > 0 && page < 7 ? (
                  <Box>
                    <PrevButton onClick={prevPage}>Prev</PrevButton>
                    <NextButton onClick={nextPage}>Next</NextButton>
                  </Box>
                ) : null}

                {page === 7 ? (
                  <Box>
                    <PrevButton onClick={prevPage}>Prev</PrevButton>
                    <CompleteButton onClick={surveyEnd}>완료</CompleteButton>
                  </Box>
                ) : null}
              </FooterBox>
            </Box>
          ) : (
            <Typography>설문에 참여해주셔서 감사합니다.</Typography>
          )}
        </SurveyBox>
      )}
    </Background>
  )
}
export default SurveyPage

const Background = styled(Box)({
  background: "#B59B89",
  display: "flex",
  alignContent: "center",
  justifyContent: "center",
  width: "100wh",
  height: "100vh",
  // padding: " 0 0 0",
  flexWrap: "wrap",
})

const SurveyBox = styled(Box)({
  display: "flex",
  width: "80%",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "cetner",
})

const QuestionBox = styled(Box)({
  fontSize: "1.5em",
  width: "70%",
})

const ButtonBox = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  justifyContent: "space-between",
})

const SurveyButton = styled(Button)({
  width: "40%",
  height: "15vh",
  fontSize: "1.5em",
  background: "#faf8f7",
  border: "2px solid #faf8f7",
  margin: "10% 0 10% 0",
})

const FooterBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignContent: "center",
  textAlign: "center",
})

const PageBox = styled(Box)({
  marginBottom: "5%",
})

const NextButton = styled(Button)({
  background: "#322725",
  width: "20%",
  marginLeft: "2%",
})

const PrevButton = styled(Button)({
  background: "#d5c0b4",
  width: "20%",
  marginRight: "2%",
})

const CompleteButton = styled(Button)({
  background: "#f4b37b",
  width: "20%",
  marginLeft: "2%",
})
