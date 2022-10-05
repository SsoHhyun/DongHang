import { React, useEffect } from "react"
import $, { get } from "jquery"
import { Box, styled, Button } from "@material-ui/core"
import NowCourse from "../components/main/nowCourse"
import Mission from "../components/mission/mission"
import AOS from "aos"
import "aos/dist/aos.css"
import { setUserInfo } from "../features/user/userSlice"
import { useSelector, useDispatch } from "react-redux/es/exports"
import { useNavigate } from "react-router-dom"
import interceptor from "../api/interceptor"
import { useState } from "react"
import Modal from "@mui/material/Modal"
import CreateMission from "../components/mission/missionCreate"

const MainPage = () => {
  const navigate = useNavigate()

  const [myTrip, setMyTrip] = useState(null)
  const [myPlace, setMyPlace] = useState([])

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const dispatch = useDispatch()

  useEffect(() => {
    AOS.init()
    if (localStorage.getItem("access-token")) {
      interceptor({
        url: "/user/info",
        method: "get",
      }).then((res) => {
        dispatch(setUserInfo(res.data))
        interceptor({
          url: "/api/trip/getTodayTrip",
          method: "get",
        }).then((res) => {
          console.log(res.data)
          if (res.data.tripNo != null) {
            setMyTrip(res.data.tripNo)
          }
          if (res.data.placeList != null) {
            setMyPlace(res.data.placeList)
          }
        })
      })
    }
  }, [])

  return (
    <Background>
      <RecomImg>
        <Img src="img/fall.jpg" alt="" />
        {/* <Img src="img/donghaeng_hanja.jpg" alt="" /> */}
      </RecomImg>
      {myTrip === null ? (
        <MainBackground>
          <MainBoxone>
            <MainBoxtwo>
              {/* 현재 진행중인 일정 */}
              <CourseBox
                data-aos="fade-up"
                data-aos-anchor-placement="center-center"
              >
                현재 일정이 없습니다.
                <Button onClick={() => navigate("/course/create")}>
                  일정 생성하기
                </Button>
              </CourseBox>
              {/* 미션 */}
              <MissionBox
                data-aos="fade-up"
                data-aos-anchor-placement="center-center"
              >
                현재 미션이 없습니다.
              </MissionBox>
            </MainBoxtwo>
            <Button
              onClick={() => {
                // getSurveyUrl()
                navigate("/survey/info")
              }}
            >
              설문 공유하기
            </Button>
          </MainBoxone>
        </MainBackground>
      ) : (
        <MainBackground>
          <MainBoxone>
            <MainBoxtwo>
              {/* 현재 진행중인 일정 */}
              <CourseBox
                data-aos="fade-up"
                data-aos-anchor-placement="center-center"
              >
                <NowCourse tripNo={myTrip} placeList={myPlace}></NowCourse>
              </CourseBox>
              {/* 미션 */}
              <MissionBox
                data-aos="fade-up"
                data-aos-anchor-placement="center-center"
              >
                <Mission tripNo={myTrip}></Mission>
                <Button onClick={handleOpen}>Create Custom Mission</Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <ModalBox>
                    <CreateMission
                      tripNo={myTrip}
                      setOpen={setOpen}
                    ></CreateMission>
                  </ModalBox>
                </Modal>
              </MissionBox>
            </MainBoxtwo>
            <Button
              onClick={() => {
                // getSurveyUrl()
                navigate("/survey/info")
              }}
            >
              설문 공유하기
            </Button>
          </MainBoxone>
        </MainBackground>
      )}
    </Background>
  )
}
export default MainPage

const Background = styled(Box)({
  display: "flex",
  flexDirection: "column",
  // justifyContent: "center",
  // alignItems: "center",
  alignItems: "center",
  background: "#d5c0b4",
})

const RecomImg = styled(Box)({
  width: "100%",
  height: "100vh",
  overflow: "hidden",
})

export const Img = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
})

const MainBackground = styled(Box)({
  background: "#d5c0b4",
})

const MainBoxtwo = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "80vw",
  height: "100vh",
  background: "white",
})

const MainBoxone = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "80vw",
  height: "100vh",
  background: "white",
})

const CourseBox = styled(Box)({
  width: "20%",
  height: "50vh",
  overflowY: "auto",
  background: "#faf8f7",
  borderRadius: "10px",
  padding: "5%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "2em",
  margin: "3%",
})

const MissionBox = styled(Box)({
  width: "30%",
  justifyContent: "center",
  background: "#faf8f7",
})

const ModalBox = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: "24",
  p: "4",
  background: "white",
})
