const express = require("express");
const router = express.Router();

// Demo auth routes (prototype level)

router.post("/register", (req, res) => {
  res.json({ message: "Register endpoint OK" });
});

router.post("/login", (req, res) => {
  res.json({ message: "Login endpoint OK" });
});

module.exports = router;
