// 지난 여행 코스(탭)
import React, { useState } from "react";
import { Box, Button, Paper, styled, Typography } from "@mui/material";
import Map from "../map";

const LastCourse = () => {
  return (
    <LastCourseContainer>
      <MapContainer id="map">
        <Map />
      </MapContainer>
      <MySpots></MySpots>
    </LastCourseContainer>
  );
};

export default LastCourse;

const LastCourseContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItem: "center",
  width: "50vw",
  height: "74vh",
});

const MapContainer = styled(Box)({
  position: "absolute",
  width: "50%",
  height: "40%",
});

const MySpots = styled(Box)({
  width: "100%",
  height: "100%",
});
