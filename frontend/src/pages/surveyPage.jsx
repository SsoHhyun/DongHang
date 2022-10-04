import { React, useState } from "react"
import {
  Box,
  Button,
  styled,
  Typography,
  Select,
  MenuItem,
} from "@material-ui/core"
import SurveyEnd from "../components/survey/surveyEnd"
import SurveyStart from "../components/survey/surveyStart"
import { useDispatch } from "react-redux"
import axios from "axios"
import * as Yup from "yup"
import { Formik, useFormik } from "formik"
import interceptor from "../api/interceptor"

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
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      survey_1: "",
      survey_2: "",
      survey_3: "",
      survey_4: "",
      survey_5: "",
      survey_6: "",
      survey_7: "",
      survey_8: "",
    },
    onSubmit: (data) => {
      console.log(data)
      interceptor({
        url: "/survey" + "url",
        method: "put",
        data,
      })
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          alert(err)
        })
    },
  })

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
        <form onSubmit={formik.handleSubmit}>
          <SurveyBox>
            {end === false ? (
              <Box>
                <QuestionBox>
                  {number}. {questionList[page]}
                </QuestionBox>

                {page === 0 ? (
                  <ButtonBox>
                    <input
                      type="text"
                      id="answer1"
                      name="survey_1"
                      value={formik.values.survey_1}
                      onChange={formik.handleChange}
                    />
                  </ButtonBox>
                ) : page === 1 ? (
                  <FourBox>
                    <FourButton
                      id="answer21"
                      type="button"
                      name="survey_2"
                      onClick={formik.handleChange}
                      value={formik.values.survey_2}
                    >
                      최대한 많은 관광지를 둘러보는 관광
                    </FourButton>
                    <FourButton
                      id="answer22"
                      type="button"
                      name="survey_2"
                      onClick={formik.handleChange}
                      value={formik.values.survey_2}
                    >
                      쉬엄쉬엄 여유롭게 구경하는 스타일
                    </FourButton>
                    <FourButton
                      id="answer23"
                      type="button"
                      name="survey_2"
                      onClick={formik.handleChange}
                      value={formik.values.survey_2}
                    >
                      구경보다는 편안한 곳에서 느긋하게 힐링
                    </FourButton>
                    <FourButton
                      id="answer24"
                      value={formik.values.survey_2}
                      name="survey_2"
                      onClick={formik.handleChange}
                    >
                      같이 가는 사람이 하자는 대로 다니는 스타일
                    </FourButton>
                  </FourBox>
                ) : page === 2 ? (
                  <ButtonBox>
                    <SurveyButton
                      id="answer31"
                      type="button"
                      name="survey_3"
                      onClick={formik.handleChange}
                      value={formik.values.survey_3}
                    >
                      좋아요
                    </SurveyButton>
                    <SurveyButton
                      id="answer32"
                      value={formik.values.survey_3}
                      name="survey_3"
                      onClick={formik.handleChange}
                    >
                      싫어요
                    </SurveyButton>
                  </ButtonBox>
                ) : page === 3 ? (
                  <ButtonBox>
                    <SurveyButton
                      id="answer41"
                      type="button"
                      name="survey_4"
                      onClick={formik.handleChange}
                      value={formik.values.survey_4}
                    >
                      물 좋고 공기 좋은 곳
                    </SurveyButton>
                    <SurveyButton
                      id="answer42"
                      name="survey_4"
                      onClick={formik.handleChange}
                      value={formik.values.survey_4}
                    >
                      도회적이고 깔끔한 공간
                    </SurveyButton>
                  </ButtonBox>
                ) : page === 4 ? (
                  <ButtonBox>
                    <SurveyButton
                      id="answer51"
                      type="button"
                      name="survey_5"
                      onClick={formik.handleChange}
                      value={formik.values.survey_5}
                    >
                      활기차고 즐거운 분위기
                    </SurveyButton>
                    <SurveyButton
                      id="answer52"
                      value={formik.values.survey_5}
                      name="survey_5"
                      onClick={formik.handleChange}
                    >
                      잔잔하고 평화로운 분위기
                    </SurveyButton>
                  </ButtonBox>
                ) : page === 5 ? (
                  <ButtonBox>
                    <SurveyButton
                      id="answer61"
                      type="button"
                      name="survey_6"
                      onClick={formik.handleChange}
                      value={formik.values.survey_6}
                    >
                      좋아요
                    </SurveyButton>
                    <SurveyButton
                      id="answer62"
                      value={formik.values.survey_6}
                      name="survey_6"
                      onClick={formik.handleChange}
                    >
                      싫어요
                    </SurveyButton>
                  </ButtonBox>
                ) : page === 6 ? (
                  <ButtonBox>
                    <SurveyButton
                      id="answer71"
                      type="button"
                      name="survey_7"
                      onClick={formik.handleChange}
                      value={formik.values.survey_7}
                    >
                      백화점, 아울렛
                    </SurveyButton>
                    <SurveyButton
                      id="answer72"
                      value={formik.values.survey_7}
                      name="survey_7"
                      onClick={formik.handleChange}
                    >
                      시장
                    </SurveyButton>
                    <SurveyButton
                      id="answer73"
                      value={formik.values.survey_7}
                      name="survey_7"
                      onClick={formik.handleChange}
                    >
                      아니요
                    </SurveyButton>
                  </ButtonBox>
                ) : (
                  <ButtonBox>
                    <Select
                      // labelId="survey_8"
                      id="answer8"
                      value={formik.values.survey_8}
                      onChange={formik.handleChange}
                      label="연령대"
                    >
                      <MenuItem value={"40"}>40대</MenuItem>
                      <MenuItem value={"50"}>50대</MenuItem>
                      <MenuItem value={"60"}>60대</MenuItem>
                      <MenuItem value={"70"}>70대</MenuItem>
                      <MenuItem value={"80"}>80대 이상</MenuItem>
                    </Select>
                  </ButtonBox>
                )}
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
                      <CompleteButton type="submit" onClick={surveyEnd}>
                        완료
                      </CompleteButton>
                    </Box>
                  ) : null}
                </FooterBox>
              </Box>
            ) : (
              <Typography>설문에 참여해주셔서 감사합니다.</Typography>
            )}
          </SurveyBox>
        </form>
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

const FourBox = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "3%",
})

const FourButton = styled(Button)({
  width: "80%",
  height: "5vh",
  fontSize: "1.5em",
  background: "#faf8f7",
  border: "2px solid #faf8f7",
  marginTop: "3%",
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
