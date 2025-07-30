
const express = require("express");
const verifyToken = require("../middlewares/verifyToken");
const { handleChat } = require("../controllers/chat.controller");

const router = express.Router();

router.post("/chat", verifyToken, handleChat);

module.exports = router;
