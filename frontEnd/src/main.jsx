import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import MainPage from "./Pages/MainPage";
import Admin from "./pages/admin/Admin";
import Users from "./pages/user/Users";
import Coures from "./pages/Courses";
import DashboardAdmin from "./pages/admin/dashboardAdmin";

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
