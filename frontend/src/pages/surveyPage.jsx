import { React, useState } from "react"
import { Box } from "@material-ui/core"
import Question from "../components/survey/question"
import Answer from "../components/survey/answer"

const [page, setPage] = useState(1)

const SurveyPage = () => {
  return (
    <Box>
      <h1>Survey Page</h1>
      <Question></Question>
      <Answer></Answer>
    </Box>
  )
}
export default SurveyPage
