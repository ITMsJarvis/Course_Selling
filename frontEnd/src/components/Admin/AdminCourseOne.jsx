import { TextField, Card, MenuItem, Button, Switch } from '@mui/material';
import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import AuthGuard from "../../authentication/authGuard";

let styleMargin = {
    marginBottom: '10px'
}
const AddCourses = () => {

    let navigate = useNavigate()
    let [addCourse, setCourseValue] = useState({
        title: "",
        description: "",
        price: "",
        imageLink: "",
        currency: "",
        published: false,
    })

    const { id } = useParams()

    // Function to fetch course data
    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/admin/courses/${id}`, {
                headers: {
                    token: localStorage.getItem("token")
                }
            });
            const courseData = response.data.course;
            setCourseValue({
                title: courseData.title,
                description: courseData.description,
                price: courseData.price,
                imageLink: courseData.imageLink,
                currency: courseData.currency,
                published: JSON.parse(courseData.published),
            });
        } catch (error) {
            console.error(error);
        }
    };

    // Call fetchData when the component mounts or 'id' changes
    useEffect(() => {
        fetchData();
    }, [id]);




    const handlePriceChange = (e) => {
        const numericValue = e.target.value.replace(/[^0-9.]/g, '');
        setCourseValue({ ...addCourse, price: numericValue });
    };



    // Function to send updated course data
    const sendData = async () => {
        try {
            const response = await axios.put(`http://localhost:4000/admin/courses/${id}`, addCourse, {
                headers: {
                    token: localStorage.getItem("token")
                }
            });
            if (response.data.message == "Course updated successfully") {
                navigate("/admin/courses")
            }
        } catch (error) {
            console.error(error);
        }
    };

    return <div style={{ marginTop: '10rem' }}>
        <Card
            variant="outlined"
            style={{
                textAlign: "center",
                borderRadius: "30px",
                margin: "0 auto",
                padding: "20px",
                maxWidth: "400px",
                boxShadow: "15px 15px 30px #bebebe, -15px -15px 30px #ffffff",
            }}
        >

            <TextField
                id="outlined-basic"
                label="Title"
                variant="outlined"
                style={styleMargin}
                fullWidth
                value={addCourse.title}
                onChange={(e) => setCourseValue({ ...addCourse, title: e.target.value })}
            />
            <TextField id="outlined-basic" label="Description" variant="outlined" style={styleMargin} value={addCourse.description} fullWidth onChange={(e) => setCourseValue({ ...addCourse, description: e.target.value })} />
            <div style={{ display: "flex", gap: "10px" }}>
                <TextField id="outlined-basic" label="Price" variant="outlined" style={{ flex: 1, ...styleMargin }} value={addCourse.price} onChange={handlePriceChange} />

            </div>
            <TextField id="outlined-basic" label="ImageLink" variant="outlined" fullWidth style={styleMargin} onChange={(e) => setCourseValue({ ...addCourse, imageLink: e.target.value })} value={addCourse.imageLink} />
            <div style={styleMargin}>
                Published
                <Switch onChange={(e) => setCourseValue({ ...addCourse, published: e.target.checked })} style={{ ...styleMargin }} checked={addCourse.published} />
            </div>

            <Button variant='contained' onClick={sendData}>Update Courses</Button>

        </Card>

    </div>;
};

export default AuthGuard(AddCourses);
