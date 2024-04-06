const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const { userModel } = require("../models/user.model");
const userRouter = express.Router();
const bcrypt = require("bcrypt");

userRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    bcrypt.hash(password, 5, async (err, hash) => {
      if (err) {
        res.status(400).json({ err: "ok" });
      } else {
        const user = new userModel({
          name,
          email,
          password: hash,
        });
        await user.save();
        res.status(200).json({ msg: "User Has Been Registered" });
      }
    });
  } catch (error) {
    res.status(400).json({ error });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        res.status(400).json({ err });
      } else {
        const token = jwt.sign(
          {
            userID: user.id,
            username: user.name,
          },
          "yawer"
        );
        res.status(200).json({ msg: "Login Successfull", token });
      }
    });
  } catch (error) {
    res.status(400).json({ error });
  }
});
module.exports = { userRouter };
