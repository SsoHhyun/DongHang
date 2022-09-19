import React, { useState } from "react";
import { Box, Button, Paper, styled, TextField } from "@mui/material";
import { Title } from "@mui/icons-material";

const LoginPage = () => {
  return (
    <Background>
      <LoginBox elevation={24}>
        {/* <Title>
          <h1>동행</h1>
        </Title>         */}
        <LoginInput>
          <Id variant="standard" label="아이디" />
          <Password variant="standard" label="비밀번호" />
          <LoginButton variant="contained">로그인</LoginButton>
        </LoginInput>
        <Intro>
          <Img src="img/imgimg.jpg" alt="" />
        </Intro>
      </LoginBox>
    </Background>
  );
};

export default LoginPage;

const Background = styled(Box)({
  backgroundColor: "#c19a6b",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  height: "100vh",
});

const LoginBox = styled(Paper)({
  borderRadius: 12,
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  backgroundColor: "white",
  width: "70vw",
  height: "80vh",
});

const LoginInput = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "space-evenly",
  height: "60vh",
  width: "30vw",
  padding: "6rem",
});

const Id = styled(TextField)({
  margin: "2rem",
});

const Password = styled(TextField)({
  margin: "2rem",
  marginTop: 0,
});

const Intro = styled(Box)({
  // display: "flex",
  // justifyContent: "center",
  // alignItems: "center",
  margin: "2rem",
  height: "60vh",
  width: "30vw",
});

const Img = styled("img")({
  width: "100%",
  height: "100%",
});

const LoginButton = styled(Button)({
  color: "white",
  fontWeight: "bold",
  backgroundColor: "#c19a6b",
  "&:hover": {
    backgroundColor: "#ba8759",
  },
  margin: "2rem",
});
