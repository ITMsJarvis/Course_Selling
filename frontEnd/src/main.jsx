import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp"
import Login from "./components/Login/Login";
import MainPage from "./components/MainPage/MainPage";
import Admin from "./components/Admin/Admin";
import Users from "./components/Users/Users";
import Coures from "./components/Admin/AdminCourses";
import DashboardAdmin from "./components/Admin/dashboardAdmin";
import DashboardUser from "./components/Users/dashboardUser";
import "./main.css"
import AddCourses from "./components/Admin/AdminAddCourses";
import CourseOne from "./components/Admin/AdminCourseOne";
import UsersCourses from "./components/Users/UsersCourses";
import AuthChecker from './authentication/authGuard2.0'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* DEFAULT */}
          <Route path="/" element={<MainPage />} />
          {/*ADMIN*/}
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/login" element={<Login page={"admin"} />} />
          <Route path="/admin/signup" element={<SignUp page={"admin"} />} />
          <Route path={"/admin/courses"} element={<Coures></Coures>} />
          <Route path={"/admin/addcourses"} element={<AddCourses></AddCourses>} ></Route>
          <Route
            path={"/admin/dashboard"}
            element={<DashboardAdmin></DashboardAdmin>}
          />
          <Route
            path={"/admin/courses/:id"}
            element={<CourseOne></CourseOne>}
          />


          {/* USERS */}
          <Route path="/user" element={<Users />} />
          <Route path="/user/login" element={<Login page={"user"} />} />
          <Route path="/user/signup" element={<SignUp page={"user"} />} />
          <Route
            path={"/user/dashboard"}
            element={<DashboardUser></DashboardUser>}
          />  <Route
            path={"/user/courses"}
            element={<UsersCourses></UsersCourses>}
          />
        </Routes>
      </Router>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
