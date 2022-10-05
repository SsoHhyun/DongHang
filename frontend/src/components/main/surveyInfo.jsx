import { React, useState } from "react"
import { Box, Button, styled, Typography } from "@material-ui/core"
import { useEffect } from "react"
import interceptor from "../../api/interceptor"
import "../../App.css"
import axios from "axios"
import { useToast } from "react-toastify"

const SurveyInfo = () => {
  // 클립보드 복사
  const onClickShare = async (text) => {
    // writeText()의 인자로 넣은 텍스트가 복사된다.
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
      })
      .catch((err) => {
        alert(err)
      })
  }, [])

  return (
    <Container>
      <Background>
        <SurveyBox>
          <h1>부모님의 취향을 알아보세요</h1>
          <SurveyContent>
            <SurveyTypography>
              부모님과 여행을 다녀오고 나면 꼭 싸우곤 하시나요?
            </SurveyTypography>
            <SurveyTypography>
              이번에도 불평하실까봐 여행 계획 짜기 부담스러우신가요?
            </SurveyTypography>
            <SurveyTypography>
              이제 먼저 부모님의 취향을 물어보세요.
            </SurveyTypography>
          </SurveyContent>
          <Button onClick={() => onClickShare(link)}>링크 복사하기</Button>
        </SurveyBox>
      </Background>
    </Container>
  )
}

export default SurveyInfo

const Container = styled(Box)({
  width: "100vw",
  height: "100vh",
  backgroundImage: "url(" + "../public/img/jeju.jpg" + ")",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  backgroundPosition: "top center",
})

const Background = styled(Box)({
  display: "flex",
  paddingTop: "8vh",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "92%",
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  position: "absolute",
})

const SurveyBox = styled(Box)({
  width: "50vw",
  height: "70vh",
  display: "flex",
  flexDirection: "column",
  marginTop: "10%",
  alignItems: "center",
  background: "",
})

const SurveyTypography = styled(Typography)({
  fontSize: "1.5rem",
})

const SurveyContent = styled(Box)({})
