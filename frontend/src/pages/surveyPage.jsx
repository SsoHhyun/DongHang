import { React, useState } from "react"
import {
  Box,
  Button,
  styled,
  Typography,
  Select,
  MenuItem,
  TextField,
} from "@material-ui/core"
import SurveyEnd from "../components/survey/surveyEnd"
import SurveyStart from "../components/survey/surveyStart"
import { useDispatch } from "react-redux"
import axios from "axios"
import * as Yup from "yup"
import { useFormik } from "formik"
import interceptor from "../api/interceptor"
import queryString from "query-string"
import { useLocation } from "react-router-dom"

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

// localhost:3000

const SurveyPage = () => {
  const { search } = useLocation()
  const { type } = queryString.parse(search)
  console.log(search)

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
    onSubmit: async (data) => {
      console.log(data)
      console.log(type)
      interceptor({
        url: "/survey?url=" + search.substring(1),
        method: "put",
        data: data,
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
                    <TextField
                      type="text"
                      id="answer1"
                      name="survey_1"
                      value={formik.values.survey_1}
                      onChange={formik.handleChange}
                    />
                  </ButtonBox>
                ) : page === 1 ? (
                  <FourBox>
                    <button
                      type="button"
                      id="answer21"
                      name="survey_2"
                      onClick={formik.handleChange}
                      value="0"
                    >
                      최대한 많은 관광지를 둘러보는 관광
                    </button>
                    <button
                      id="answer22"
                      type="button"
                      name="survey_2"
                      onClick={formik.handleChange}
                      value="1"
                    >
                      쉬엄쉬엄 여유롭게 구경하는 스타일
                    </button>
                    <button
                      id="answer23"
                      type="button"
                      name="survey_2"
                      onClick={formik.handleChange}
                      value="2"
                    >
                      구경보다는 편안한 곳에서 느긋하게 힐링
                    </button>
                    <button
                      id="answer24"
                      type="button"
                      name="survey_2"
                      onClick={formik.handleChange}
                      value="3"
                    >
                      같이 가는 사람이 하자는 대로 다니는 스타일
                    </button>
                  </FourBox>
                ) : page === 2 ? (
                  <ButtonBox>
                    <button
                      id="answer31"
                      type="button"
                      name="survey_3"
                      onClick={formik.handleChange}
                      value="1"
                    >
                      좋아요
                    </button>
                    <button
                      id="answer32"
                      name="survey_3"
                      type="button"
                      value="0"
                      onClick={formik.handleChange}
                    >
                      싫어요
                    </button>
                  </ButtonBox>
                ) : page === 3 ? (
                  <ButtonBox>
                    <button
                      id="answer41"
                      type="button"
                      name="survey_4"
                      onClick={formik.handleChange}
                      value="0"
                    >
                      물 좋고 공기 좋은 곳
                    </button>
                    <button
                      id="answer42"
                      name="survey_4"
                      type="button"
                      onClick={formik.handleChange}
                      value="1"
                    >
                      도회적이고 깔끔한 공간
                    </button>
                  </ButtonBox>
                ) : page === 4 ? (
                  <ButtonBox>
                    <button
                      id="answer51"
                      type="button"
                      name="survey_5"
                      onClick={formik.handleChange}
                      value="0"
                    >
                      활기차고 즐거운 분위기
                    </button>
                    <button
                      id="answer52"
                      type="button"
                      name="survey_5"
                      value="1"
                      onClick={formik.handleChange}
                    >
                      잔잔하고 평화로운 분위기
                    </button>
                  </ButtonBox>
                ) : page === 5 ? (
                  <ButtonBox>
                    <button
                      id="answer61"
                      type="button"
                      name="survey_6"
                      onClick={formik.handleChange}
                      value="1"
                    >
                      좋아요
                    </button>
                    <button
                      id="answer62"
                      type="button"
                      name="survey_6"
                      value="0"
                      onClick={formik.handleChange}
                    >
                      싫어요
                    </button>
                  </ButtonBox>
                ) : page === 6 ? (
                  <ButtonBox>
                    <button
                      id="answer71"
                      name="survey_7"
                      type="button"
                      onClick={formik.handleChange}
                      value="0"
                    >
                      백화점, 아울렛
                    </button>
                    <button
                      id="answer72"
                      name="survey_7"
                      type="button"
                      onClick={formik.handleChange}
                      value="1"
                    >
                      시장
                    </button>
                    <button
                      id="answer73"
                      type="button"
                      name="survey_7"
                      value="2"
                      onClick={formik.handleChange}
                    >
                      아니요
                    </button>
                  </ButtonBox>
                ) : (
                  <ButtonBox>
                    <Select
                      id="answer8"
                      name="survey_8"
                      value={formik.values.survey_8}
                      onChange={formik.handleChange}
                      label="age"
                    >
                      <MenuItem value="40">40대</MenuItem>
                      <MenuItem value="50">50대</MenuItem>
                      <MenuItem value="60">60대</MenuItem>
                      <MenuItem value="70">70대</MenuItem>
                      <MenuItem value="80">80대 이상</MenuItem>
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
                      <CompleteButton type="submit">
                        {/* onClick={surveyEnd} */}
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
