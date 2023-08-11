import {
  Typography,
  Card,
  TextField,
  Button,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import axios from "axios";

const SignIn = ({ page }) => {
  const [showPassword, setShowPassword] = useState(false);

  const [signInData, setData] = useState({
    username: "",
    password: "",
  });
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  function sendData() {
    let { username, password } = signInData;

    axios
      .post(
        `http://localhost:4000/${page}/login`,
        {},
        {
          headers: {
            username: username,
            password: password,
          },
        }
      )
      .then((response) => {
        console.log(response);
        let { message, token } = response.data;
        if (message === "Logged in successfully") {
          localStorage.setItem("token", token);
          window.location.href = `/${page}/dashboard`;
        } else {
          alert("Invalid Credentials");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        alert("Error fetching data");
      });
  }

  let fullWidth = {
    width: "100%",
  };

  return (
    <div style={{ marginTop: "10rem" }}>
      <Card
        variant="outlined"
        style={{
          textAlign: "center",
          margin: "0 auto",
          padding: "10px",
          maxWidth: "400px",
        }}
      >
        <Typography variant="h3" style={{ marginTop: "1rem" }}>
          Welcome {page.substr(0, 1).toUpperCase() + page.substr(1)}
        </Typography>
        <br />
        <>
          <TextField
            id="outlined-basic"
            placeholder={"USERNAME"}
            variant="outlined"
            // defaultValue={"}
            style={fullWidth}
            onChange={(e) =>
              setData({ ...signInData, username: e.target.value })
            }
          />
          <br />
          <br />

          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"} // This line controls whether the password is shown or hidden
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword} // This function toggles the showPassword state
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            style={fullWidth}
            onChange={(e) => {
              setData({ ...signInData, password: e.target.value });
            }}
            placeholder="PASSWORD"
          />
        </>

        <br />
        <br />
        <Button
          variant="contained"
          style={{ backgroundColor: "black" }}
          onClick={sendData}
        >
          {"SignIn"}
        </Button>
      </Card>
    </div>
  );
};

export default SignIn;
