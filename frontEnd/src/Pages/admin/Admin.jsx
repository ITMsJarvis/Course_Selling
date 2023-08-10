import { Typography } from "@mui/material";
import Navbar from "../../components/common/Navbar";

const Admin = () => {
  let navLinks = {
    buttonData: [
      ["/admin/login", "Login"],
      ["/admin/signup", "SignUp"],
    ],
  };

  return (
    <>
      <Navbar navlink={navLinks}></Navbar>
      <Typography variant="h6">Hi Admins How are you</Typography>
    </>
  );
};

export default Admin;
