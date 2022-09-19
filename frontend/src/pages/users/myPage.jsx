import React, { useState } from "react";
import PropTypes from "prop-types";
import Album from "../../components/myPage/album";
import {
  Box,
  Button,
  Paper,
  styled,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const MyPage = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <SideBar>
        <Profile>
          <Photo></Photo>
          <Name>윤석열</Name>
        </Profile>
        <MyTabs orientation="vertical" value={value} onChange={handleChange}>
          <MyTab label="내 정보" value={1} />
          <MyTab label="뱃지" value={2} />
          <MyTab label="지난 여행" value={3} />
        </MyTabs>
      </SideBar>
      <TabPanel value={value} index={1}>
        <Album></Album>
      </TabPanel>
      <TabPanel value={value} index={2}>
        hi
      </TabPanel>
      <TabPanel value={value} index={3}>
        hello
      </TabPanel>
    </Container>
  );
};

export default MyPage;

const Container = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  height: "100vh",
});

const SideBar = styled(Paper)({
  height: "100vh",
  width: "20vw",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "space-evenly",
});

const Profile = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const Photo = styled(Box)({
  backgroundColor: "gold",
  borderRadius: 100,
  width: "200px",
  height: "200px",
  margin: "2rem",
});

const Name = styled(Typography)({
  color: "#c19a6b",
  fontWeight: "bold",
  fontSize: 25,
});

const MyTabs = styled(Tabs)({
  // height: "50vh",
});

const MyTab = styled(Tab)({
  margin: "1rem",
  color: "#c19a6b",
});

// const MyTabPanel = styled(Box)({});
