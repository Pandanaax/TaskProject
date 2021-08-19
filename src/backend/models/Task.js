var mongoose = require("mongoose");

var taskSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true,
  },
  description: {
    type: String,
    unique: true,
    required: true,
  },
  date: {
    type: Date,
    unique: true,
    required: true,
  },
  status: {
    type: String,
    unique: true,
    required: true,
  },
});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
