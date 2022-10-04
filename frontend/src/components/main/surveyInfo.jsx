import { React, useState } from "react"
import { Box, Button } from "@material-ui/core"

const SurveyInfo = () => {
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

  return (
    <Box>
      <Box>
        <h1>설문조사 설명 설명</h1>
      </Box>
      <Button onClick={() => onClickShare("복사할 내용")}>링크 복사하기</Button>
    </Box>
  )
}

export default SurveyInfo
