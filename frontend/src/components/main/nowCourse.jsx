import * as React from "react"
import { Container, Box, Grid, styled } from "@material-ui/core"

const CoursePoint = styled(Box)({
  background: "tomato",
  borderRadius: 100,
  width: 20,
  height: 20,
  margin: 10,
})

const NowCourse = () => {
  return (
    <Container>
      <Grid container justifyContent="center">
        <CoursePoint></CoursePoint>
        <CoursePoint></CoursePoint>
        <CoursePoint></CoursePoint>
        <CoursePoint></CoursePoint>
        <CoursePoint></CoursePoint>
      </Grid>
    </Container>
  )
}

export default NowCourse
