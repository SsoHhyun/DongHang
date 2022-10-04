import React, { useLayoutEffect } from "react"
import { useSelector } from "react-redux/es/exports"
import {
  Box,
  Button,
  styled,
  Typography,
  Paper,
  Input,
  Badge,
} from "@mui/material"
import { Photo } from "../../pages/users/myPage"
import SmartphoneIcon from "@mui/icons-material/Smartphone"
import EmailIcon from "@mui/icons-material/Email"
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle"

const Info = () => {
  const user = useSelector((state) => state.user)

  return (
    <InfoContainer>
      <MyInfo>{user.nickname}님, 환영합니다!</MyInfo>
      <User elevation={2}>
        <UserInfo>
          <UserPhoto>
            <Photo src={user.profileImage} alt="profile" />
            <ChangePhoto
              color="info"
              onClick={() => {
                console.log(user)
              }}
            />
          </UserPhoto>
          <UserName>
            <MyName defaultValue={user.nickname}></MyName>
            <UserId>{`@${user.id}`}</UserId>
          </UserName>
        </UserInfo>
        <EditBtn>수정</EditBtn>
      </User>
      <User elevation={2}>
        <Phone>
          <SmartphoneIcon />
          <PhoneNumber defaultValue={user.phoneNumber}></PhoneNumber>
        </Phone>
        <EditBtn>수정</EditBtn>
      </User>
      <User elevation={2}>
        <Email>
          <EmailIcon />
          <EmailAddress defaultValue={user.email}></EmailAddress>
        </Email>
        <EditBtn>수정</EditBtn>
      </User>
    </InfoContainer>
  )
}

export default Info

const InfoContainer = styled(Paper)({
  borderRadius: 20,
  width: "53vw",
  height: "95vh",
  backgroundColor: "beige",
  marginLeft: "1.5rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
})

const MyInfo = styled(Typography)({
  fontSize: 30,
  color: "brown",
  fontWeight: "bold",
  textAlign: "center",
  marginBottom: "2rem",
})

const User = styled(Paper)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginLeft: "4rem",
  marginRight: "4rem",
  marginBottom: "1rem",
  marginTop: "1rem",
  borderRadius: 10,
  backgroundColor: "ivory",
})

const UserInfo = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
})

const UserPhoto = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "end",
})

const ChangePhoto = styled(ChangeCircleIcon)({
  position: "absolute",
  paddingBottom: 50,
  paddingLeft: 150,
})

const UserName = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
})

const MyName = styled(Input)({
  color: "#c19a6b",
  fontWeight: "bold",
  fontSize: 25,
  textAlign: "center",
})

const UserId = styled(Typography)({
  color: "grey",
})

const EditBtn = styled(Button)({
  margin: "2rem",
  color: "crimson",
})

const Phone = styled(Box)({
  marginLeft: "2rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
})

const Email = styled(Box)({
  marginLeft: "2rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
})

const PhoneNumber = styled(Input)({
  marginLeft: "1rem",
  color: "grey",
  fontSize: 17,
})

const EmailAddress = styled(Input)({
  marginLeft: "1rem",
  color: "grey",
  fontSize: 17,
})
