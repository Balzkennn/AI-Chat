const express = require("express");
const router = express.Router();
const { handleChat } = require("../controllers/chat.controller");
const verifyToken = require("../middleware/authMiddleware");

router.post("/chat", verifyToken, handleChat);

module.exports = router;
