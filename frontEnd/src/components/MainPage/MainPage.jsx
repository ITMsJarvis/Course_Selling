import MainPageNav from "../Navbar/Navbar";
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
      <MainPageNav navlink={navLinks} />
    </>
  );
};

export default MainPage;
