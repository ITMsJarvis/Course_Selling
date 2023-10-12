
import express from "express"
import { Request,Response } from "express"
import { Course, Admin } from "../db"
import jwt from "jsonwebtoken"
import {authenticateJwt} from "../middleware/auth"

const router = express.Router();
let SECRET = "Jib"

router.post("/signup", (req :Request, res : Response) => {
  
  const { username } = req.body;
  if(!username){
 res.status(200).json({message : "Username not provided"})
  }
  function callback(admin: any) {
    if (admin) {
      res.status(403).json({ message: "Admin already exists" });
    } else {
      const newAdmin = new Admin(req.body);
      newAdmin.save();
      res.json({ message: "Admin created successfully" });
    }
  }
  Admin.findOne({ username }).then(callback);
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const admin = await Admin.findOne({ username, password });
  if (admin) {
    const token = jwt.sign({ username, role: "admin" }, SECRET, {
      expiresIn: "1h",
    });
    res.json({ message: "Logged in successfully", token });
  } else {
    res.status(403).json({ message: "Invalid username or password" });
  }
});

router.post("/courses", authenticateJwt, async (req, res) => {
  const course = new Course({
    ...req.body,
  });
  await course.save();
  res.json({ message: "Course created successfully", courseId: course.id });
});

router.delete("/courses/:id", authenticateJwt, async (req, res) => {
  const { id } = req.params;

  try {
    const deletedCourse = await Course.findByIdAndDelete(id);

    if (deletedCourse) {
      res.json({ message: "Course deleted successfully" });
    } else {
      res.status(404).json({ message: "Course not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.put("/courses/:id", authenticateJwt, async (req, res) => {
  const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (course) {
    res.json({ message: "Course updated successfully" });
  } else {
    res.status(404).json({ message: "Course not found" });
  }
});

router.get("/courses", authenticateJwt, async (req, res) => {
  const courses = await Course.find({});
  res.json({ courses });
});

router.get("/courses/:id", authenticateJwt, async (req, res) => {
  const { id } = req.params;
  const course = await Course.findById(id);
  res.json({ course });
});

export default router;
