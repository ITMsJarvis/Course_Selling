const jwt = require("jsonwebtoken");
require("dotenv").config();
const SECRET = process.env.SECRET;

const authenticateJwt = (req, res, next) => {
  let { token } = req.headers;
  if (token) {
    jwt.verify(token, SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.json({ message: "Error from Auth / Provide correct token" });
  }
};

module.exports = {
  authenticateJwt,
  SECRET,
};
