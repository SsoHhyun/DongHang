import * as React from "react"
import { Typography, Box, Button } from "@material-ui/core"
import axios from "axios"
import interceptor from "../../api/interceptor"

const CreateMission = () => {
  const CreateMissionRequest = (method, url, data) => {
    interceptor({
      url: "/mission/create",
      method: "post",
    })
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        alert(err)
      })
  }

  return (
    <Box>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        나만의 미션 만들기
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        <input type="text" />
      </Typography>
      <Box>
        <Button onClick={() => CreateMissionRequest()}>등록</Button>
      </Box>
    </Box>
  )
}

export default CreateMission
