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
    </LastCourseContainer>
  );
};

export default LastCourse;

const LastCourseContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItem: "center",
});

const MapContainer = styled(Map)({
  position: "absolute",
  width: "100%",
  height: "100%",
});
