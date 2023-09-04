const mongoose = require("mongoose");
// Define mongoose schemas
const userSchema = new mongoose.Schema(
  {
    username: { type: String },
    password: { type: String },
    purchasedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
    firstname: String,
    lastname: String,
    token: String,
  },
  { timestamps: true }
);

const adminSchema = new mongoose.Schema(
  {
    firstname: { type: String },
    lastname: { type: String },
    MobileNumber: { type: String },
    username: { type: String },
    password: { type: String },
    token: { type: String },
  },
  { timestamps: true }
);

const courseSchema = new mongoose.Schema(
  {
    id: Number,
    title: String,
    description: String,
    price: String,
    imageLink: String,
    published: Boolean,
  },
  { timeseries: true }
);

const User = mongoose.model("User", userSchema);
const Admin = mongoose.model("Admin", adminSchema);
const Course = mongoose.model("Course", courseSchema);

module.exports = {
  User,
  Admin,
  Course,
};
