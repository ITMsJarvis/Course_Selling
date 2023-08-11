import AuthGuard from "../../authGuard/authGuard";
import Navbar from "../../components/common/Navbar";

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
