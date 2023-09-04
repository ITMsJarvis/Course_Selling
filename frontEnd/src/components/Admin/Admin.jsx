import { Typography } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";


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
    </>

  );
};

export default Admin;
