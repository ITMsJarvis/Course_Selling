const mongoose = require("mongoose");
// Define mongoose schemas
const userSchema = new mongoose.Schema({
            username: {type: String, required : true, minlength :3 , maxlength : 10},
            password: {type : String , required : true},
            purchasedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
  }, {timestamps:true});
  
const adminSchema = new mongoose.Schema({
    username: {type : String ,required : true},
    password: {type : String , required: true},token : {type : String}
  }, {timestamps : true});
  
const courseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    imageLink: String,
    published: Boolean
  },{timeseries: true});

const User = mongoose.model('User', userSchema);
const Admin = mongoose.model('Admin', adminSchema);
const Course = mongoose.model('Course', courseSchema);
  
  module.exports = {
    User,
    Admin,
    Course
  }