import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Badge from "../../components/myPage/badge"
import Info from "../../components/myPage/userInfo"
import LastTrip from "../../components/myPage/lastTrip"
import Album from "../../components/myPage/album"
import { Box, Paper, styled, Tab, Tabs, Typography } from "@mui/material"
import { useSelector, useDispatch } from "react-redux/es/exports"
import { setUserInfo } from "../../features/user/userSlice"
import interceptor from "../../api/interceptor"
import Img from "../mainPage"
import "../../App.css"

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

const MyPage = () => {
  const [value, setValue] = useState(1)
  const [albumOpen, setAlbumOpen] = useState(false)
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    interceptor({
      url: "/user/info",
      method: "get",
    }).then((res) => {
      dispatch(setUserInfo(res.data))
    })
  }, [])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <Container>
      <Background>
        <SideBar elevation={2}>
          <Profile>
            <Photo src={user.profileImage} alt="profile" />
            <Name>{user.nickname}</Name>
          </Profile>
          <MyTabs orientation="vertical" value={value} onChange={handleChange}>
            <MyTab label="내 정보" value={1} />
            {/* <MyTab label="뱃지" value={2} /> */}
            <MyTab
              label="지난 여행"
              value={3}
              onClick={() => setAlbumOpen(false)}
            />
          </MyTabs>
        </SideBar>
        <TabPanel value={value} index={1}>
          <Info />
        </TabPanel>
        {/* <TabPanel value={value} index={2}>
        <Badge />
      </TabPanel> */}
        <TabPanel value={value} index={3}>
          {albumOpen === false ? (
            <LastTrip albumOpen={albumOpen} setAlbumOpen={setAlbumOpen} />
          ) : (
            <Album albumOpen={albumOpen} />
          )}
        </TabPanel>
      </Background>
    </Container>
  )
}

export default MyPage

// const BackImg = styled(Image)({
//   width: "100vw",
//   height: "100vh",
// })

const Container = styled(Box)({
  width: "100vw",
  height: "100vh",
  // backgroundImage: "url(" + "img/water.jpg" + ")",
  backgroundImage: "url(" + "img/kyeongju.jpg" + ")",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  backgroundPosition: "top center",
})

const Background = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  position: "absolute",
})

const SideBar = styled(Paper)({
  height: "90vh",
  width: "20vw",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "space-evenly",
  borderRadius: 15,
  // background: "linear-gradient(135deg, white, beige)",
})

const Profile = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
})

export const Photo = styled("img")({
  borderRadius: "50%",
  width: "200px",
  height: "200px",
  margin: "2rem",
})

export const Name = styled(Typography)({
  color: "#c19a6b",
  fontWeight: "bold",
  fontSize: 30,
  fontFamily: "HallymGothic-Regular",
})

const MyTabs = styled(Tabs)({
  // height: "50vh",
})

const MyTab = styled(Tab)({
  margin: "1rem",
  color: "black",
  fontSize: 16,
  fontWeight: "bold",
  // border: "solid",
  borderRadius: 10,
  backgroundColor: "primary",
})

// const MyTabPanel = styled(Box)({});
