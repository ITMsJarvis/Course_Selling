import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import MainPage from "./Pages/MainPage";
import Admin from "./pages/admin/Admin";
import Users from "./pages/user/Users";
import ProtectedComponent from "./services/HOC";
// import { Course } from "../../backEnd/db";

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
          <Route
            path={"/admin/dashboard"}
            element={<ProtectedComponent></ProtectedComponent>}
          >
            <Route path="jarvis" element={<div>Wh</div>} />
          </Route>

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
