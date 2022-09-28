import axios from "axios"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Formik, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Button, TextField } from "@mui/material"
import { useNavigate } from "react-router-dom"

const SignUp = () => {
  const navigate = useNavigate()
  const validationSchema = Yup.object().shape({
    id: Yup.string()
      .min(2, "닉네임은 최소 2글자 이상입니다!")
      .max(10, "닉네임은 최대 10글자입니다!")
      .required("아이디를 입력하세요!"),
    email: Yup.string()
      .email("올바른 이메일 형식이 아닙니다!")
      .required("이메일을 입력하세요!"),
    nickname: Yup.string()
      .min(2, "닉네임은 최소 2글자 이상입니다!")
      .max(10, "닉네임은 최대 10글자입니다!")
      .required("닉네임을 입력하세요!"),
    password: Yup.string()
      .min(8, "비밀번호는 최소 8자리 이상입니다")
      .max(16, "비밀번호는 최대 16자리입니다!")
      .required("패스워드를 입력하세요!"),
    // password2: Yup.string()
    //   .oneOf([Yup.ref("password"), null], "비밀번호가 일치하지 않습니다!")
    //   .required("필수 입력 값입니다!"),
  })

  const submit = async (values) => {
    const { email, id, nickname, password } = values
    console.log(email, id, nickname, password)
    try {
      await axios.post("http://j7a504.p.ssafy.io:8080/user", {
        email: email,
        id: id,
        nickname: nickname,
        password: password,
      })
      toast.success(
        <h3>
          회원가입이 완료되었습니다.
          <br />
          로그인 하세요😎
        </h3>,
        {
          position: "top-center",
          autoClose: 2000,
        }
      )
      setTimeout(() => {
        navigate("/login")
      }, 2000)
    } catch (e) {
      // 서버에서 받은 에러 메시지 출력
      toast.error(e.response.data.message + "😭", {
        position: "top-center",
      })
    }
  }

  return (
    <Formik
      initialValues={{
        email: "",
        nickname: "",
        id: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={submit}
      validateOnMount={true}
    >
      {({ values, handleSubmit, handleChange, errors }) => (
        <div className="signup-wrapper">
          <ToastContainer />
          <form onSubmit={handleSubmit} autoComplete="off">
            <div className="input-forms">
              <div className="input-forms-item">
                <div className="input-label">id</div>
                <TextField
                  value={values.id}
                  name="id"
                  variant="outlined"
                  onChange={handleChange}
                />
                <div className="error-message">{errors.id}</div>
              </div>
              <div className="input-forms-item">
                <div className="input-label">이메일</div>
                <TextField
                  value={values.email}
                  name="email"
                  variant="outlined"
                  onChange={handleChange}
                />
                <div className="error-message">{errors.email}</div>
              </div>
              <div className="input-forms-item">
                <div className="input-label">닉네임</div>
                <TextField
                  value={values.nickname}
                  name="nickname"
                  variant="outlined"
                  onChange={handleChange}
                />
                <div className="error-message">{errors.nickname}</div>
              </div>
              <div className="input-forms-item">
                <div className="input-label">비밀번호</div>
                <TextField
                  value={values.password}
                  name="password"
                  variant="outlined"
                  type="password"
                  onChange={handleChange}
                />
                <div className="error-message">{errors.password}</div>
              </div>
              {/* <div className="input-forms-item">
                <div className="input-label">비밀번호 확인</div>
                <TextField
                  value={values.password2}
                  name="password2"
                  variant="outlined"
                  type="password"
                  onChange={handleChange}
                />
                <div className="error-message">{errors.password2}</div>
              </div> */}
              <Button
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
              >
                회원가입
              </Button>
            </div>
          </form>
        </div>
      )}
    </Formik>
  )
}

export default SignUp
