const express = require("express");
const { connection } = require("./config/db");
const app = express();
app.use(express.json());
require("dotenv").config();

const { userRouter } = require("./routes/user.route");
const { taskRouter } = require("./routes/task.route");

app.use("/users", userRouter);
app.use("/tasks", taskRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Database Connected");
    console.log(`server Runnning st PORT ${process.env.PORT}`);
  } catch (err) {
    console.log(err);
  }
});
