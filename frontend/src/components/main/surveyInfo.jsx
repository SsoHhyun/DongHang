import { React, useState } from "react"
import { Box, Button } from "@material-ui/core"
import { useEffect } from "react"
import interceptor from "../../api/interceptor"
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
    <Box>
      <Box>
        <h1>설문조사 설명 설명</h1>
      </Box>
      <Button onClick={() => onClickShare(link)}>링크 복사하기</Button>
    </Box>
  )
}

export default SurveyInfo
