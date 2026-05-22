
const express = require("express");
const router = express.Router();

const {
  getTasks,
  addTask,
  updateTask,
  deleteTask
} = require("../controllers/taskController");

// READ
router.get("/", getTasks);

// CREATE
router.post("/", addTask);

// UPDATE
router.put("/:id", updateTask);

// DELETE
router.delete("/:id", deleteTask);

module.exports = router;
