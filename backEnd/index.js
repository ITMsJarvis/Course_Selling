const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
require("dotenv").config();
const { authenticateJwt } = require("./middleware/auth");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/admin", adminRouter);
app.use("/user", userRouter);

app.get("/protectedData", authenticateJwt, async (req, res) => {
  try {
    // Fetch data from MongoDB based on user authentication (if needed)
    const data = await YourModel.find({ username: req.user.id }); // Assuming you have a userId field in your MongoDB documents
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

// Connect to MongoDB
// DONT MISUSE THIS THANKYOU!!
mongoose.connect(
  process.env.MONGODB_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "database",
  }
);

app.listen(4000, () => console.log("Server running on port 4000"));
