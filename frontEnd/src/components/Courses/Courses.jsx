import { useEffect, useState } from "react";
import AuthGuard from "../../authentication/authGuard";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { Card, Grid, CardContent, CardMedia, Typography } from "@mui/material";

const Courses = ({ page }) => {
  let [content, setContent] = useState(null);
  function deleteToken() {
    localStorage.removeItem("token");
    return (window.location.href = "/");
  }
  let navLinks = {
    buttonData: [["/admin/addcourses" , "addCourses"],["/admin", "Logout", deleteToken]],
  };
  useEffect(() => {
    axios
      .get("http://localhost:4000/admin/courses", {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((response) => setContent(response.data.courses));
  }, []);
  return (
    <>
      <Navbar navlink={navLinks}></Navbar>
      <Grid container justifyContent="center" alignItems="center" margin={1} spacing={5}>
        {content?.map((x) => (
          <Grid item key={x._id} xs={12} sm={6} md={3} lg={3}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={x.imageLink}
                alt={x.title}
              />
              <CardContent>
                <Typography variant="h6">{x.title}</Typography>
                <Typography variant="body2">{x.description}</Typography>
                <Typography variant="subtitle1">${x.price}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default AuthGuard(Courses);
