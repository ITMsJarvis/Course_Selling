
import {Navbar} from "../Navbar/Navbar";


export const Admin = () => {
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

