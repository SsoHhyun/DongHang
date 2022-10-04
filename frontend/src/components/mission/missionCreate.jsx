import * as React from "react"
import { Typography, Box, Button } from "@material-ui/core"
import axios from "axios"
import interceptor from "../../api/interceptor"
import { useState } from "react"

const CreateMission = (props) => {
  const [content, setContent] = useState("")
  const close = () => {
    props.setOpen(false)
  }
  const onChangeContent = (e) => {
    setContent(e.target.value)
  }
  console.log(props.close)
  const CreateMissionRequest = (url, method, data) => {
    interceptor({
      url: "/api/mission",
      method: "post",
      data: {
        content: content,
        tripNo: props.tripNo,
      },
    })
      .then((res) => {
        alert("미션이 생성되었습니다.")
        close()
        axios
          .get(
            "http://j7a504.p.ssafy.io:8080/api/mission/trip?tripNo=" +
              props.tripNo
          )
          .then((res) => {
            console.log(res)
          })
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
        <input type="text" onChange={onChangeContent} value={content} />
      </Typography>
      <Box>
        <Button onClick={() => CreateMissionRequest()}>등록</Button>
      </Box>
    </Box>
  )
}

export default CreateMission
