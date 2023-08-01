import { Typography, Card, TextField, Button } from "@mui/material";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {Link} from 'react-router-dom'


const SignIn = ({page}) => {
  // let navigate = useNavigate();
  console.log("====>" , page)
  let [signUpData, setData] = useState({
    firstName: " ",
    surName: "",
    mobileNumberOrEmailId: "",
    username: "",
    password: "",
  });
  async function sendBackEnd() {
    try{
await fetch(`http://localhost:4000/${page}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signUpData),
    }).then(() => {
      console.log("Sent Your Data to the BackEnd");
    });
    alert("You have successfully created");
    }catch(err){
console.log(err)
    }
    
    function ClickMe(){
      
    }
  }
  return (
    <div style={{ marginTop: "10rem"}}>
      <Card
        variant="outlined"
        style={{
          textAlign: "center",
          margin: "0 auto",
          padding: "10px",
          maxWidth: "400px",
        }}
      >
        <Typography variant="h2" style={{ marginTop: "1rem" }}>
         Hi {page.toUpperCase()}
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
              onChange={(e) =>{
               setData({...signUpData , firstName: e.target.value})
              }
              }
            />
            <TextField
              variant="outlined"
              label="LAST NAME"
              style={{ flex: 1 }}
              margin="none"
              onChange={(e) => {
                 setData({...signUpData , surName: e.target.value})
              }}
            />
          </div>
          <br />
          <TextField
            variant="outlined"
            label="MOBILE/EMAIL"
            fullWidth
            margin="none"
            onChange={(e) =>
             {
               setData({...signUpData , mobileNumberOrEmailId: e.target.value})
             }
            }
          />
          <br />
          <br />
          <TextField
            variant="outlined"
            label="USERNAME"
            fullWidth
            margin="none"
            onChange={(e) => {
              setData({...signUpData, username :  e.target.value })
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
              setData({...signUpData, password :  e.target.value })
            }}
          />
          <br />
        </>

        <br />
        <br />
        <div style={{display: 'flex', justifyContent: 'center' , gap:"30px"}}>
         
        <Button
          variant="contained"
          style={{ backgroundColor: "black" }}
          onClick={sendBackEnd}
        >
        <Link to={`/${page}/login`} style={{textDecoration : 'none' , color: 'white'}} >  SignUp </Link>
        </Button>
        
  
        <Button variant="contained" style={{backgroundColor : 'black'}}><Link to={`/${page}/login`} style={{textDecoration : 'none' , color: 'white'}} >  Login</Link></Button>
        </div>
      </Card>
    </div>
  );
};

export default SignIn;
