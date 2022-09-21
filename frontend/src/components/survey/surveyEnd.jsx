import React from "react"
import { Box, styled, Button } from "@material-ui/core"
import Question from "./question"

//취향설문 대답

const Answer = () => {
  return (
    <Box>
      <Button>예</Button>
      <Button>아니오</Button>
      <Button>상관없음</Button>
    </Box>
  )
}
export default Answer
