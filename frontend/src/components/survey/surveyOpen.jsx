import React from "react"
import { Button } from "@mui/material"
import { useRef } from "react"
import { useToast } from "react-toastify"
import interceptor from "../../api/interceptor"

const SurveyOpen = () => {
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
    <Button onClick={() => onClickShare("복사할 내용")}>설문 공유하기</Button>
  )
}
// 링크 생성 후 저기 복사할 내용에 그 링크를 넣어주면 됨..
// 그리고 나서 체크? 어떻게 해야할 지 모르겠음,, ㅜㅜ

export default SurveyOpen
