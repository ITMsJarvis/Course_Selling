import {Navbar} from "../Navbar/Navbar";
const MainPage = () => {
  let navLinks = {
    buttonData: [
      ["/", "Home"],
      ["#about", "About"],
      ["#product", "Product"],
      ["/admin", "Admin"],
      ["/user", "User"],
    ],
  };

  return (
    <>
      <Navbar navlink={navLinks} lovesh={"jarvis"}/>
     
    </>
  );
};

export default MainPage;
