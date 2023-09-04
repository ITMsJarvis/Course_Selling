import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp"
import Login from "./components/Login/Login";
import MainPage from "./components/MainPage/MainPage";
import Admin from "./components/Admin/Admin";
import Users from "./components/Users/Users";
import Coures from "./components/Courses/Courses";
import DashboardAdmin from "./components/Admin/dashboardAdmin";
import "./main.css"
import AddCourses from "./components/Courses/AddCourses";

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

          {/* USERS */}
          <Route path="/user" element={<Users />} />
          <Route path="/users/login" element={<Login page={"user"} />} />
          <Route path="/users/signup" element={<SignUp page={"user"} />} />
        </Routes>
      </Router>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
