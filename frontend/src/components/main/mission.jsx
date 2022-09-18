import React from "react"
import { Box, styled, Grid, Paper } from "@material-ui/core"

const MissionBox = styled(Box)({
  background: "yellow",
  borderRadius: 10,
  width: 100,
})

const Mission = () => {
  return (
    <Box>
      <Grid container direction="column" alignItems="center">
        <MissionBox>부모님과 손잡고 걷기</MissionBox>
        <MissionBox>부모님과 손잡고 걷기</MissionBox>
        <MissionBox>부모님과 손잡고 걷기</MissionBox>
        <MissionBox>부모님과 손잡고 걷기</MissionBox>
        <MissionBox>부모님과 손잡고 걷기</MissionBox>
      </Grid>
    </Box>
  )
}

export default Mission
