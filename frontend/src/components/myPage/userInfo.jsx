import {
  Box,
  Button,
  Paper,
  styled,
  Tab,
  Tabs,
  Typography,
} from "@mui/material"
import { fullname, username } from "react-lorem-ipsum"
import { Photo, Name } from "../../pages/users/myPage"

const Info = () => {
  return (
    <InfoContainer>
      <User>
        <UserInfo>
          <Photo />
          <UserName>
            <Name>{fullname()}</Name>
            <UserId>{`@${username()}`}</UserId>
          </UserName>
        </UserInfo>
        <EditBtn>닉네임 수정</EditBtn>
      </User>

      <Phone></Phone>
      <Email></Email>
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
  alignContent: "space-evenly",
})

const User = styled(Box)({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
})

const UserInfo = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
})

const UserName = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
})

const UserId = styled(Typography)({
  color: "grey",
})

const EditBtn = styled(Button)({
  margin: "2rem",
  color: "crimson",
})

const Phone = styled(Box)({})

const Email = styled(Box)({})
