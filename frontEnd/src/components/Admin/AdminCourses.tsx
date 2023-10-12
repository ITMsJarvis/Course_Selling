import { useEffect, useState } from "react";
import { AuthGuard } from "../../authentication/authGuard";
import { Navbar } from "../Navbar/Navbar";
import axios from "axios";
import {
  Card,
  Grid,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

interface Course {
  _id: string;
  title: string;
  description: string;
  price: number;
  imageLink: string;
}

const Courses = () => {
  const [content, setContent] = useState<Course[] | null>(null);

  function deleteToken() {
    localStorage.removeItem("token");
    return (window.location.href = "/");
  }

  const navLinks = {
    buttonData: [
      ["/admin/addcourses", "addCourses"],
      ["/admin", "Logout", deleteToken],
    ],
  };

  const handleDeleteCourse = (courseId: string) => {
    axios
      .delete(`http://localhost:4000/admin/courses/${courseId}`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.status === 200) {
          // If the delete request was successful, you can update your UI or perform other actions as needed.
          // For example, you can remove the deleted course from your content state.
          setContent((prevContent) => {
  if (prevContent === null) {
    return null; // Return null when prevContent is null
  } else {
    return prevContent.filter((course) => course._id !== courseId);
  }
});
        } else {
          // Handle errors here if needed
          console.error("Delete request failed");
        }
      })
      .catch((error) => {
        // Handle errors here if needed
        console.error("Delete request error:", error);
      });
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
              <CardMedia component="img" height="140" image={x.imageLink} alt={x.title} />
              <CardContent>
                <Typography variant="h6">{x.title}</Typography>
                <Typography variant="body2">{x.description}</Typography>
                <Typography variant="subtitle1">${x.price}</Typography>
                <Button variant="contained" style={{ backgroundColor: "black" }}>
                  <Link to={`${x._id}/`} style={{ textDecoration: "none", color: "white" }}>
                    Edit
                  </Link>
                </Button>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "red", float: 'right' }}
                  onClick={() => handleDeleteCourse(x._id)}
                >
                  Delete
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default AuthGuard(Courses);
