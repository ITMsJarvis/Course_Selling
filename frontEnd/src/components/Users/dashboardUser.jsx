import AuthGuard from "../../authentication/authGuard";
import Navbar from "../Navbar/Navbar";

const dashboardUser = () => {
    function deleteToken() {
        return localStorage.removeItem("token");
    }
    let navLinks = {
        buttonData: [
            ["/user/courses", "Courses"],
            ["/user", "Logout", deleteToken],
        ],
    };
    return (
        <div>
            <Navbar navlink={navLinks}></Navbar>
        </div>
    );
};

export default AuthGuard(dashboardUser);
