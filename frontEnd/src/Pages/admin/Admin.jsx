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
      <Typography
        variant="h6"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        Hi Admins, How are you?
      </Typography>
    </>
  );
};

export default Admin;
