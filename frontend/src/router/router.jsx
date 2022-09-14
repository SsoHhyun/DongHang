import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "../pages/users/loginPage"
import SignUpPage from "../pages/users/signUpPage"
import Mypage from "../pages/users/myPage"
import CourseDetailPage from "../pages/courseDetailPage"
import CreateCoursePage from "../pages/createCoursePage"
import MainPage from "../pages/mainPage"
import SurveyPage from "../pages/surveyPage"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/course/:courseId" element={<CourseDetailPage />} />
        <Route path="/users/mypage" element={<Mypage />} />
        <Route path="/course/create" element={<CreateCoursePage />} />
        <Route path="/survey" element={<SurveyPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
