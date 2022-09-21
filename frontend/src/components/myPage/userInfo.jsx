import React from "react"
import {
  Box,
  Button,
  styled,
  Typography,
  Paper,
  Input,
  TextField,
} from "@mui/material"
import { fullname, username } from "react-lorem-ipsum"
import { Photo } from "../../pages/users/myPage"
import SmartphoneIcon from "@mui/icons-material/Smartphone"
import EmailIcon from "@mui/icons-material/Email"
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle"

const Info = () => {
  // const ariaLabel = { "aria-label": "description" }

  return (
    <InfoContainer>
      <MyInfo>내 정보</MyInfo>
      <User elevation={3}>
        <UserInfo>
          <UserPhoto>
            <Photo />
            <ChangePhoto
              color="info"
              onClick={() => {
                console.log("hi")
              }}
            />
          </UserPhoto>
          <UserName>
            <MyName defaultValue={fullname()}></MyName>
            <UserId>{`@${username()}`}</UserId>
          </UserName>
        </UserInfo>
        <EditBtn>수정</EditBtn>
      </User>
      <User elevation={3}>
        <Phone>
          <SmartphoneIcon />
          <PhoneNumber defaultValue="010-0000-0000"></PhoneNumber>
        </Phone>
        <EditBtn>수정</EditBtn>
      </User>
      <User elevation={3}>
        <Email>
          <EmailIcon />
          <EmailAddress defaultValue={`${username()}@gmail.com`}></EmailAddress>
        </Email>
        <EditBtn>수정</EditBtn>
      </User>
    </InfoContainer>
  )
}

export default Info

const InfoContainer = styled(Box)({
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
  fontWeight: "bold",
  textAlign: "center",
  marginBottom: "2rem",
})

const User = styled(Paper)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "1rem",
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
