import MainPageNav from "../components/common/Navbar";
import ContentBox from "../Build/ContentBox";
const MainPage = () => {
  let navLinks = {
    buttonData: [
      ["/", "Home"],
      ["#about", "About"],
      ["/", "Product"],
      ["/admin", "Admin"],
      ["/user", "User"],
    ],
  };

  return (
    <>
      <MainPageNav navlink={navLinks} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        <ContentBox />
      </div>
    </>
  );
};

export default MainPage;
