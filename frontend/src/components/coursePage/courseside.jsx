import { Box } from "@material-ui/core"
import React from "react"
import SideContents from "./sidecontents"
import { styled, Button } from "@mui/material"
import Swal from "sweetalert2"
import interceptor from "../../api/interceptor"
import TextField from "@mui/material/TextField"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"

// 사이드바

const CourseSide = (props) => {
  const [startDate, setStartDate] = React.useState(null)
  const [endDate, setEndDate] = React.useState(null)
  const parseDate = (newValue) => {
    if (newValue == null) return "0"
    let temp = newValue.$d.getFullYear().toString()
    if (newValue.$d.getMonth() < 9) {
      temp = temp + "0" + (newValue.$d.getMonth() + 1).toString()
    } else {
      temp = temp + (newValue.$d.getMonth() + 1).toString()
    }
    if (newValue.$d.getDate() < 10) {
      temp = temp + "0" + newValue.$d.getDate().toString()
    } else {
      temp = temp + newValue.$d.getDate().toString()
    }
    return temp
  }

  return (
    <Box>
      <Box
        style={{
          height: "80vh",
          width: "20vw",
          position: "absolute",
          paddingLeft: "1vw",
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            Fullwidth
            label="출발 날짜"
            value={startDate}
            onChange={(newValue) => {
              setStartDate(parseDate(newValue))
              console.log(startDate)
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                style={{ marginBottom: "15px" }}
              />
            )}
          />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="마지막 날짜"
            value={endDate}
            onChange={(newValue) => {
              setEndDate(parseDate(newValue))
              console.log(endDate)
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                style={{ marginBottom: "15px" }}
              />
            )}
          />
        </LocalizationProvider>
        <StyledCourseSide>
          {props.recommendspot.map((placeList, index) => (
            <SideContents
              key={index}
              spotIndex={index}
              spot={props.recommendspot[index]}
              deleteCourse={props.deleteCourse}
              setSelectedSpot={props.setSelectedSpot}
            ></SideContents>
          ))}
        </StyledCourseSide>
        <Box>
          <Button
            variant="contained"
            color="success"
            style={{
              position: "absolute",
              bottom: 0,
              marginBottom: "5%",
              left: "35%",
              fontSize: 14,
              borderRadius: 10,
              fontFamily: "HallymGothic-Regular",
            }}
            onClick={() => {
              Swal.fire({
                title: "일정의 이름을 적어주세요",
                input: "text",
                inputAttributes: {
                  autocapitalize: "off",
                },
                showCancelButton: true,
                confirmButtonText: "일정생성",
                showLoaderOnConfirm: true,
                preConfirm: (login) => {
                  const commonNoList = []
                  for (let i = 0; i < props.recommendspot.length; i++) {
                    commonNoList.push(props.recommendspot[i].commonNo)
                  }
                  interceptor({
                    url: "/api/trip",
                    method: "post",
                    data: {
                      commonNoList: commonNoList,
                      endDate: endDate,
                      startDate: startDate,
                      tripName: login,
                    },
                  })
                    .then((res) => {
                      console.log("createsuccess")
                      Swal.fire({
                        title: "일정이 생성되었습니다!",
                        text: "일정이 성공적으로 생성되었습니다!",
                        icon: "success",
                        confirmButtonText: "확인",
                      })
                    })
                    .catch((err) => {
                      alert(err)
                    })
                },
              })
            }}
          >
            일정생성
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
export default CourseSide

const StyledCourseSide = styled(Box)({
  width: "20vw",
  height: "55vh",
  overflow: "auto",
  left: "0%",
  position: "absolute",
  padding: "1rem",
})
