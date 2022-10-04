import * as React from "react"
import { Box, styled } from "@material-ui/core"
import Timeline from "@mui/lab/Timeline"
import TimelineItem from "@mui/lab/TimelineItem"
import TimelineSeparator from "@mui/lab/TimelineSeparator"
import TimelineConnector from "@mui/lab/TimelineConnector"
import TimelineContent from "@mui/lab/TimelineContent"
import TimelineDot from "@mui/lab/TimelineDot"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import interceptor from "../../api/interceptor"

const NowCourse = () => {
  useEffect(() => {
    interceptor({
      url: "/api/trip/getMyTripList",
      method: "get",
    })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        alert(err)
      })
  }, [])

  return (
    <Timeline position="left">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Eat</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Code</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Sleep</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>Repeat</TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}

export default NowCourse

const CoursePoint = styled(Box)({
  background: "tomato",
  borderRadius: 100,
  width: 20,
  height: 20,
  margin: 10,
})
