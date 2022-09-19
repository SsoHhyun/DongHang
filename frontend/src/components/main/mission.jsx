import React from "react"
import { Box, styled, Grid } from "@material-ui/core"

const MissionGrid = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
})

const MissionBox = styled(Box)({
  background: "yellow",
  width: "70%",
  borderRadius: 20,
  textAlign: "center",
  margin: 10,
})

const Mission = () => {
  return (
    <MissionGrid>
      <MissionBox>부모님과 손잡고 걷기</MissionBox>
      <MissionBox>부모님과 손잡고 걷기</MissionBox>
      <MissionBox>부모님과 손잡고 걷기</MissionBox>
      <MissionBox>부모님과 손잡고 걷기</MissionBox>
      <MissionBox>부모님과 손잡고 걷기</MissionBox>
    </MissionGrid>
  )
}

export default Mission
