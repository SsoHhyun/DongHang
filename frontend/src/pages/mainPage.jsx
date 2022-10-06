import { React, useEffect } from "react"
import { Box, styled, Button, IconButton, Typography } from "@material-ui/core"
import NowCourse from "../components/main/nowCourse"
import Mission from "../components/mission/mission"
import AOS from "aos"
import "aos/dist/aos.css"
import { setUserInfo } from "../features/user/userSlice"
import { useDispatch } from "react-redux/es/exports"
import { useNavigate } from "react-router-dom"
import interceptor from "../api/interceptor"
import { useState } from "react"
import Modal from "@mui/material/Modal"
import CreateMission from "../components/mission/missionCreate"
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline"
import RecommTrip from "../components/main/recommTrip"
import "../App.css"
import { Fade } from "react-reveal"

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
      })
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
    }
  }, [])

  return (
    <Background>
      <RecomImg>
        <MainIntro>
          <Fade duration={4000} delay={500}>
            <Title>동행</Title>
          </Fade>
          <Fade duration={4000} delay={500}>
            <Intro>
              부모님과의 <strong>특별한 여행</strong>,<br></br>
              지금 시작하세요
            </Intro>
          </Fade>
        </MainIntro>

        {myTrip === null ? (
          <MainBackground>
            <MainBox>
              <Labels
                data-aos="fade-up"
                data-aos-anchor-placement="center-center"
              ></Labels>
              <MissionCourse>
                {/* 현재 진행중인 일정 */}
                <NoCourseBox
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-center"
                >
                  <NoCourseTypography>현재 일정이 없습니다.</NoCourseTypography>
                  <Button
                    style={{
                      fontFamily: "HallymGothic-Regular",
                      width: "30%",
                      background: "#f4b37b",
                    }}
                    onClick={() => navigate("/course/create")}
                  >
                    일정 생성하기
                  </Button>
                </NoCourseBox>
                {/* 미션 */}
                <MissionBox
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-center"
                >
                  <RecommTrip></RecommTrip>
                </MissionBox>
              </MissionCourse>
              <ShareSurveyBox data-aos="fade-up">
                <ShareTypography>
                  부모님의 여행 취향을 알고싶다면?
                </ShareTypography>
                <ShareSurveyButton
                  onClick={() => {
                    // getSurveyUrl()
                    navigate("/survey/info")
                  }}
                  style={{ fontFamily: "HallymGothic-Regular" }}
                >
                  Click
                </ShareSurveyButton>
              </ShareSurveyBox>
            </MainBox>
          </MainBackground>
        ) : (
          <MainBackground>
            <MainBox>
              <Labels
                data-aos="fade-up"
                data-aos-anchor-placement="center-center"
              >
                <MissionTypography>일정</MissionTypography>
                <MissionTypography>미션</MissionTypography>
              </Labels>
              <MissionCourse>
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
                  <IconButton onClick={handleOpen}>
                    <AddCircleOutlineIcon />
                  </IconButton>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <ModalBox
                      style={{
                        width: "30vw",
                        height: "25vh",
                        overflow: "hidden",
                        borderRadius: "10px",
                        border: "none",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <CreateMission
                        tripNo={myTrip}
                        setOpen={setOpen}
                      ></CreateMission>
                    </ModalBox>
                  </Modal>
                </MissionBox>
              </MissionCourse>
              <ShareSurveyBox data-aos="fade-up">
                <ShareTypography>
                  부모님의 여행 취향을 알고싶다면?
                </ShareTypography>
                <ShareSurveyButton
                  onClick={() => {
                    // getSurveyUrl()
                    navigate("/survey/info")
                  }}
                  style={{ fontFamily: "HallymGothic-Regular" }}
                >
                  Click
                </ShareSurveyButton>
              </ShareSurveyBox>
            </MainBox>
          </MainBackground>
        )}
      </RecomImg>
    </Background>
  )
}
export default MainPage

const Background = styled(Box)({
  width: "100%",
  height: "200vh",
  backgroundImage: "url(" + "../img/seoul.jpg" + ")",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  backgroundPosition: "top center",
})

const RecomImg = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "200vh",
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  position: "absolute",
  overflowX: "hidden",
})

const MainIntro = styled(Box)({
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "start",
  flexDirection: "column",
  display: "flex",
  justifyContent: "center",
})

const Title = styled(Typography)({
  fontFamily: "Makgeolli",
  fontSize: "16em",
  color: "white",
  opacity: 0.9,
  margin: "10rem",
  marginBottom: 0,
  textShadow: "5px 5px 11px rgba(0, 0, 0, 1)",
})

const Intro = styled(Typography)({
  fontFamily: "JSongMyung-Regular-KO",
  fontSize: "2.5rem",
  color: "white",
  opacity: 0.9,
  textAlign: "left",
  margin: "10rem",
  marginTop: 0,
  textShadow: "5px 5px 11px rgba(0, 0, 0, 1)",
})

export const Img = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
})

const MainBackground = styled(Box)({
  scrollSnapAlign: "start",
})

const MainBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  height: "100vh",
})

const MissionCourse = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  width: "80%",
  height: "60%",
  background: "white",
})

const CourseBox = styled(Box)({
  width: "30%",
  height: "80%",
  overflow: "auto",
  background: "#faf8f7",
  borderRadius: "10px",
  padding: "3px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "2em",
  marginRight: "3vw",
  fontFamily: "HallymGothic-Regular",
  paddingTop: "2%",
})

const NoCourseBox = styled(Box)({
  width: "30%",
  height: "80%",
  overflowY: "auto",
  background: "#faf8f7",
  borderRadius: "10px",
  padding: "3px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "2em",
  marginRight: "3vw",
  fontFamily: "HallymGothic-Regular",
})

const NoCourseTypography = styled(Typography)({
  fontSize: "1.5rem",
  fontFamily: "HallymGothic-Regular",
  marginBottom: "3%",
})

const MissionBox = styled(Box)({
  width: "30%",
  justifyContent: "center",
  background: "#faf8f7",
  borderRadius: "10px",
  height: "80%",
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

const ShareSurveyBox = styled(Box)({
  width: "30%",
  display: "flex",
})

const ShareTypography = styled(Typography)({
  fontFamily: "IBMPlexSansKR-Regular",
  fontSize: "1.5rem",
})

const MissionTypography = styled(Typography)({
  fontFamily: "IBMPlexSansKR-Regular",
  fontSize: "1.5rem",
})

const ShareSurveyButton = styled(Button)({
  position: "relative",
  fontWeight: "bold",
  "&:after": {
    content: "",
    display: "block",
    width: "0",
    height: "5px",
    position: "absolute",
    left: "0",
    bottom: "0px",
    background: "rgba(200, 125, 220, .6)",
  },
  "&:hover": {
    transition: "all 0.5s linear",
    opacity: "1",
    fontSize: 19,
  },
})

const Labels = styled(Box)({
  width: "38%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
})
