import { Typography } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";

const Admin = () => {
  let navLinks = {
    buttonData: [
      ["/user/login", "Login"],
      ["/user/signup", "SignUp"],
    ],
  };

  return (
    <>
      <Navbar navlink={navLinks}></Navbar>
      <Typography variant="h6"></Typography>
    </>
  );
};

export default Admin;
