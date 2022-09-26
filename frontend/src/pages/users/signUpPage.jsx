import React, { useState } from "react"
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControl,
  FormControlLabel,
  Checkbox,
  FormHelperText,
  Grid,
  Box,
  Typography,
  Container,
  styled,
} from "@mui/material/"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { Paper } from "@material-ui/core"

const Register = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#b59b89",
        darker: "#322725",
      },
      secondary: {
        main: "#b59b89",
        contrastText: "#b59b89",
      },
    },
  })
  const [checked, setChecked] = useState(false)

  // 동의 체크
  const handleAgree = (event) => {
    setChecked(event.target.checked)
  }

  // form 전송
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <SignupContainer>
      <SignupPaper>
        <ThemeProvider theme={theme}>
          <Box align="center">
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }} />
          </Box>
          <Typography align="center">
            <h1>Signup</h1>
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <FormControl component="fieldset" variant="standard">
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    autoFocus
                    fullWidth
                    type="email"
                    id="email"
                    name="email"
                    label="이메일 주소"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    type="password"
                    id="password"
                    name="password"
                    label="비밀번호 (숫자+영문자+특수문자 8자리 이상)"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    type="password"
                    id="rePassword"
                    name="rePassword"
                    label="비밀번호 재입력"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="name"
                    name="name"
                    label="이름"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                size="large"
              >
                회원가입
              </Button>
            </FormControl>
          </Box>
        </ThemeProvider>
      </SignupPaper>
    </SignupContainer>
  )
}
export default Register

const SignupContainer = styled(Container)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  alignContent: "center",
  height: "100vh",
  width: "40vw",
})

const SignupPaper = styled(Paper)({
  width: "30vw",
  height: "60vh",
  padding: "5%",
  justifyContent: "center",
  borderRadius: "10px",
  // component: "main",
  // maxWidth: "xs",
})
