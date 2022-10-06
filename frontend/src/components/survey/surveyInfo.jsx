import { React, useState } from "react"
import { Box, Button, styled, Typography } from "@material-ui/core"
import { useEffect } from "react"
import interceptor from "../../api/interceptor"
import "../../App.css"
import axios from "axios"
import { useToast } from "react-toastify"
import Fade from "react-reveal/Fade"

const SurveyInfo = () => {
  // 클립보드 복사
  const onClickShare = async (text) => {
    // writeText()의 인자로 넣은 텍스트가 복사된다.
    console.log(text);
    window.navigator.clipboard
      .writeText(text)
      .then(() => {
        // 복사가 완료되면 이 부분이 호출된다.
        alert("복사 완료!")
      })
      .catch((error) => {
        alert("다시 시도해주세요.")
      })
  }

  const [link, setLink] = useState("")

  useEffect(() => {
    interceptor({
      url: "/survey/generate/url",
      method: "get",
    })
      .then((res) => {
        // console.log(res)
        setLink(res.data)
        console.log(res.data);
      })
      .catch((err) => {
        alert(err)
      })
  }, [])

  return (
    <SurveyContainer>
      <SurveyBackground>
        <SurveyBox>
          <Fade bottom>
            <h1>취향을 물어보세요</h1>
          </Fade>
          <SurveyContent1>
            <Fade bottom delay={1000}>
              <SurveyTypography>
                부모님과 여행을 다녀오고 나면 꼭 싸우곤 하시나요?
              </SurveyTypography>
            </Fade>
          </SurveyContent1>
          <SurveyContent2>
            <Fade bottom delay={2000}>
              <SurveyTypography>이번에도 불평하실까봐 </SurveyTypography>
              <SurveyTypography>여행계획 짜기 부담스러운가요?</SurveyTypography>
            </Fade>
          </SurveyContent2>
          <SurveyContent1>
            <Fade bottom delay={3000}>
              <SurveyTypography>이제 먼저 부모님의 취향을</SurveyTypography>
              <SurveyTypography>알아보세요.</SurveyTypography>
            </Fade>
          </SurveyContent1>
          <Fade bottom delay={4000}>
            <Button
              style={{ background: "#BDCFDD" }}
              onClick={() => onClickShare(link)}
            >
              설문 링크 복사하기
            </Button>
          </Fade>
        </SurveyBox>
      </SurveyBackground>
    </SurveyContainer>
  )
}

export default SurveyInfo

const SurveyContainer = styled(Box)({
  width: "100vw",
  height: "100vh",
  backgroundImage: "url(" + "../img/jeju.jpg" + ")",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  backgroundPosition: "top center",
})

const SurveyBackground = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: "8vh",
  width: "100%",
  height: "92%",
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  position: "absolute",
})

const SurveyBox = styled(Box)({
  width: "30vw",
  height: "50vh",
  display: "flex",
  flexDirection: "column",
  marginTop: "1%",
  padding: "2%",
  background: "#faf8f7",
  borderRadius: "10px",
  justifyContent: "center",
})

const SurveyTypography = styled(Typography)({
  fontSize: "1.5rem",
  fontFamily: "HallymGothic-Regular",
  wordWrap: "break-word",
})

const SurveyContent1 = styled(Box)({
  width: "60%",
  height: "30%",
  alignSelf: "flex-start",
  marginBottom: "3%",
})

const SurveyContent2 = styled(Box)({
  width: "60%",
  height: "30%",
  alignSelf: "flex-end",
  marginBottom: "3%",
  marginTop: "3%",
})
