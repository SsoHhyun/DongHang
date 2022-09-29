//navbar 틀만
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Box, styled, Paper } from "@mui/material";
import Swal from "sweetalert2";

const Navbar = () => {
  const [isLogin, setIslogin] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleMenuClick = () => {
    setIsExpanded(!isExpanded);
    console.log(isExpanded);
  };

  useEffect(() => {
    //잘못된 접근 제한
    if (isLogin) {
      if (
        window.location.pathname === "/login" ||
        window.location.pathname === "/signup"
      )
        navigate("/");
    }

    if (localStorage.getItem("access-token")) {
      setIslogin(true);
    } else {
      setIslogin(false);
    }
  }, [location]);

  return (
    <Container>
      <Navigate>
        <PageLink to="/">동행</PageLink>
        {!isLogin ? (
          <>
            <PageLink to="/login">로그인</PageLink>
            <PageLink to="/signup">회원가입</PageLink>
          </>
        ) : (
          <>
            <PageLink to="/logout">로그아웃</PageLink>
            <PageLink to="/mypage">My Page</PageLink>
            <PageLink to="/course/create">코스생성</PageLink>
          </>
        )}
      </Navigate>
    </Container>
  );
};

export default Navbar;

const Container = styled(Box)({
  position: "fixed",
  width: "100vw",
  height: "8vh",
  zIndex: 100,
  // backgroundColor: "white",
});

const Navigate = styled(Box)({});

const PageLink = styled(Link)({});
