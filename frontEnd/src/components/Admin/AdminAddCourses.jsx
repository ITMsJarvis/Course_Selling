import { TextField, Card, MenuItem, Button, Switch } from '@mui/material';
import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import AuthGuard from "../../authentication/authGuard";
const currencies = [
  {
    value: '₹',
    label: '₹',
  },
  {
    value: '$',
    label: '$',
  },
  {
    value: '€',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  }

];

let styleMargin = {
  marginBottom: '10px'
}
const AddCourses = () => {
  let navigate = useNavigate();
  const handlePriceChange = (e) => {

    const numericValue = e.target.value.replace(/[^0-9.]/g, '');
    setCourseValue({ ...addCourse, price: numericValue });
  };

  async function sendData() {
    try {
      const response = await axios.post(
        `http://localhost:4000/admin/courses`,
        addCourse, {
        headers: {
          token: localStorage.getItem("token")
        }
      }
      )
      if (response.data.message == "Course created successfully") {
        navigate("/admin/courses")
      }
    } catch (err) {
      console.error(err);
    }
  }

  let [addCourse, setCourseValue] = useState({
    title: "",
    description: "",
    price: "",
    imageLink: "",
    currency: "",
    published: "",
  })

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

      <TextField id="outlined-basic" label="Title" variant="outlined" style={styleMargin} fullWidth onChange={(e) => setCourseValue({ ...addCourse, title: e.target.value })} />
      <TextField id="outlined-basic" label="Description" variant="outlined" style={styleMargin} fullWidth onChange={(e) => setCourseValue({ ...addCourse, description: e.target.value })} />
      <div style={{ display: "flex", gap: "10px" }}>
        <TextField
          id="outlined-select-currency"
          select
          label="Price"
          defaultValue='₹'
          style={{ flex: 1 }}
          helperText="Please select your currency"
          onChange={(e) => setCourseValue({ ...addCourse, currency: e.target.value })}>
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))} </TextField>
        <TextField id="outlined-basic" label="Price" variant="outlined" style={{ flex: 1 }} onChange={handlePriceChange} />

      </div>
      <TextField id="outlined-basic" label="ImageLink" variant="outlined" fullWidth style={styleMargin} onChange={(e) => setCourseValue({ ...addCourse, imageLink: e.target.value })} />
      <div style={styleMargin}>
        Published
        <Switch onChange={(e) => setCourseValue({ ...addCourse, published: e.target.checked })} style={{ ...styleMargin }} />
      </div>

      <Button variant='contained' onClick={sendData}>Add Courses</Button>

    </Card>

  </div>;
};

export default AuthGuard(AddCourses);
