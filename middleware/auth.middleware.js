const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (token) {
    jwt.verify(token, "yawer", (err, decoded) => {
      if (err) {
        res.status(400).json({ err });
      } else {
        console.log("Decoded");

        next();
      }
    });
  } else {
    res.status(200).json({ msg: "Please Login" });
  }
};

module.exports = { auth };
