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
import {Link} from 'react-router-dom'
import { useState } from "react";

const SignIn = ({page}) => {
 
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
  
  let {username , password} = signInData
 
  fetch(`http://localhost:4000/${page}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "username" : username,
      "password" : password
    },
  })
    .then((response) => response.json())
    .then(({ message, token }) => {
      if (message === 'Logged in successfully') {
        localStorage.setItem('token', token);
      } else {
        alert('Invalid Credentials');
      }
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      alert('Error fetching data');
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
          Welcome  {page.substr(0,1).toUpperCase()+ page.substr(1)}
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
          <Link to={`${page}/courses`} style={{color : 'white' , textDecoration :  'none'}}>{"SignIn"} </Link> 
          
        </Button>
      </Card>
    </div>
  );
};

export default SignIn;
