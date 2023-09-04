import { Typography, Card, TextField, Button } from "@mui/material";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SignIn = ({ page }) => {
  let [signUpData, setData] = useState({
    firstname: "",
    lastname: "",
    MobileNumber: "",
    username: "",
    password: "",
  });
  async function sendBackEnd() {
    try {
      const response = await axios.post(
        `http://localhost:4000/${page}/signup`,
        signUpData
      );
      if (response.data.message) {
        window.location.href = `/${page}/login`;
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div style={{ marginTop: "10rem" }}>
    <Card
  variant="outlined"
  style={{
    textAlign: "center",
     borderRadius: "30px",
    margin: "0 auto",
    padding: "10px",
    maxWidth: "400px",
    boxShadow: "15px 15px 30px #bebebe, -15px -15px 30px #ffffff",
  }}
>
        <Typography variant="h4" style={{ marginTop: "1rem" }}>
          Hi {page.substr(0,1).toUpperCase() +page.substr(1)}s
        </Typography>
        <Typography variant="h5" style={{ marginTop: "1rem" }}>
          Welcome To SignUp
        </Typography>
        <br />
        <>
          <br />
          <div style={{ display: "flex", gap: "10px" }}>
            <TextField
              variant="outlined"
              label="FIRST NAME"
              style={{ flex: 1 }}
              margin="none"
              onChange={(e) => {
                setData({ ...signUpData, firstname: e.target.value });
              }}
            />
            <TextField
              variant="outlined"
              label="LAST NAME"
              style={{ flex: 1 }}
              margin="none"
              onChange={(e) => {
                setData({ ...signUpData, lastname: e.target.value });
              }}
            />
          </div>
          <br />
          <TextField
            variant="outlined"
            label="MOBILE/EMAIL"
            fullWidth
            margin="none"
            onChange={(e) => {
              setData({ ...signUpData, MobileNumber: e.target.value });
            }}
          />
          <br />
          <br />
          <TextField
            variant="outlined"
            label="USERNAME"
            fullWidth
            margin="none"
            onChange={(e) => {
              setData({ ...signUpData, username: e.target.value });
            }}
          />
          <br />
          <br />
          <TextField
            variant="outlined"
            label="PASSWORD"
            type="password"
            fullWidth
            margin="none"
            onChange={(e) => {
              setData({ ...signUpData, password: e.target.value });
            }}
          />
          <br />
        </>

        <br />
        <br />
        <div style={{ display: "flex", justifyContent: "center", gap: "30px" }}>
          <Button
            variant="contained"
            style={{ backgroundColor: "black" }}
            onClick={sendBackEnd}
          >
            SignUp
          </Button>

          <Button variant="contained" style={{ backgroundColor: "black" }}>
            <Link
              to={`/${page}/login`}
              style={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              Login
            </Link>
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default SignIn;
