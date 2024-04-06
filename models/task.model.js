const mongoose = require("mongoose");
const TaskSchema = mongoose.Schema(
  {
    title: String,
    description: { type: String, required: true },
    dueDate: { type: Date, required: true },
    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Medium",
    },
    status: { type: Boolean, default: false },
  },
  { versionKey: false }
);

const taskModel = mongoose.model("Tasks", TaskSchema);
module.exports = { taskModel };
