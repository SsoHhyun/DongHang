import React, { useState } from "react"
import PropTypes from "prop-types"
import Album from "../../components/myPage/album"
import Badge from "../../components/myPage/badge"
import Info from "../../components/myPage/userInfo"
import {
  Box,
  Button,
  Paper,
  styled,
  Tab,
  Tabs,
  Typography,
} from "@mui/material"
import { Avatar, fullname } from "react-lorem-ipsum"

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
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    // <BackImg >
    <Container src="img/d4.jpg">
      <SideBar elevation={2}>
        <Profile>
          <Photo />
          <Name>{fullname()}</Name>
        </Profile>
        <MyTabs orientation="vertical" value={value} onChange={handleChange}>
          <MyTab label="내 정보" value={1} />
          <MyTab label="뱃지" value={2} />
          <MyTab label="지난 여행" value={3} />
        </MyTabs>
      </SideBar>
      <TabPanel value={value} index={1}>
        <Info />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Badge />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Album />
      </TabPanel>
    </Container>
    // </BackImg>
  )
}

export default MyPage

// const BackImg = styled(Image)({
//   width: "100vw",
//   height: "100vh",
// })

const Container = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  height: "100vh",
})

const SideBar = styled(Paper)({
  height: "100vh",
  width: "20vw",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "space-evenly",
  background: "linear-gradient(135deg, ivory, beige)",
})

const Profile = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
})

export const Photo = styled(Avatar)({
  borderRadius: 100,
  width: "200px",
  height: "200px",
  margin: "2rem",
})

export const Name = styled(Typography)({
  color: "#c19a6b",
  fontWeight: "bold",
  fontSize: 30,
})

const MyTabs = styled(Tabs)({
  // height: "50vh",
})

const MyTab = styled(Tab)({
  margin: "1rem",
  color: "white",
  fontSize: 16,
  fontWeight: "bold",
  border: "solid",
  borderRadius: 10,
  backgroundColor: "#c19a6b",
})

// const MyTabPanel = styled(Box)({});
