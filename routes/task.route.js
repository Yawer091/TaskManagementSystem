const express = require("express");
const { taskModel } = require("../models/task.model");
const { auth } = require("../middleware/auth.middleware");
const taskRouter = express.Router();

taskRouter.get("/", auth, async (req, res) => {
  try {
    const tasks = await taskModel.find({ userID: req.body.userID });
    const filteredTasks = tasks.filter((task) => {
      return task.title && task.description && task.dueDate && task.priority;
    });
    res.status(200).json({ task: filteredTasks });
  } catch (error) {
    res.status(400).json({ error });
  }
});
taskRouter.post("/", async (req, res) => {
  try {
    const task = new taskModel(req.body);
    await task.save();
    res.status(200).json({ msg: "Task Added" });
  } catch (error) {
    res.status(400).json({ error });
  }
});

taskRouter.patch("/:taskID", auth, async (req, res) => {
  const payload = req.body;
  const { taskID } = req.params;
  try {
    const task = await taskModel.findOne({ _id: taskID });
    if (req.body.taskID === task.userID) {
      await taskModel.findByIdAndUpdate(
        {
          _id: taskID,
        },
        payload
      );
      res.status(200).json({ msg: `Task with ID ${taskID} updated` });
    } else {
      res.status(400).json({ msg: "not found" });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
});

taskRouter.delete("/:taskID", auth, async (req, res) => {
  const { taskID } = req.params;
  try {
    const task = await taskModel.findOne({ _id: taskID });
    if (!task) {
      return res.status(400).json({ msg: "Task not present" });
    }
    if (task.userID !== req.body.userID) {
      res.status(400).json({ msg: "You are not authorized" });
    }
    await taskModel.findByIdAndDelete(taskID);
    res.status(200).json({ msg: `Task deleted successfully` });
  } catch (err) {
    res.status(400).json({ err });
  }
});

module.exports = { taskRouter };
