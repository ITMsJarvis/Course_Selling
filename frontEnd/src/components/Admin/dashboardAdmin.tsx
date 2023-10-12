import AuthGuard from "../../authentication/authGuard";
import Navbar from "../Navbar/Navbar";

const dashboardAdmin = () => {
  function deleteToken() {
    return localStorage.removeItem("token");
  }
  let navLinks = {
    buttonData: [
      ["/admin/courses", "Courses"],
      ["/admin", "Logout", deleteToken],
    ],
  };
  return (
    <div>
      <Navbar navlink={navLinks}></Navbar>
    </div>
  );
};

export default AuthGuard(dashboardAdmin);
