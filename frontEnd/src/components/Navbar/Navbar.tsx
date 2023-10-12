import { AppBar, Box, Toolbar, Button, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Navbar = (prop:any) => {
  let { buttonData } = prop.navlink;
  let whiteBackground = ["Admin", "User", "Login", "SignUp", "Logout"];
  return (
    <>
      <Paper elevation={24}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" style={{ backgroundColor: "black" }}>
            <Toolbar>
              <Typography variant="h3" sx={{ flexGrow: 1 }} style={{ fontFamily: 'Teko' }} key={"logo"}>
                TVF
              </Typography>
              <div style={{ display: "flex", gap: "15px" }}>
                {buttonData?.map((x:any, index:string) => (
                    <Button
                      key={index}
                      variant={"contained"}
                      style={{
                        fontFamily: 'Teko',
                        fontSize: '20px',
                        backgroundColor: whiteBackground.includes(x[1])
                          ? "white"
                          : "black",
                      }}
                      onClick={x[2] ? x[2] : null}
                    >
                      <Link
                        to={x[0]}
                        style={{
                          textDecoration: "none",
                          color: whiteBackground.includes(x[1])
                            ? "black"
                            : "white",
                        }}
                      >
                        {x[1]}
                      </Link>
                    </Button>
                ))}
              </div>
            </Toolbar>
          </AppBar>
        </Box>
      </Paper>
    </>
  );
};

