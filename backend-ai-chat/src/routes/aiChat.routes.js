const express = require("express");
const router = express.Router();
const { sendMessage } = require("../controller/aiChat.controller");

router.post("/chat", sendMessage);

module.exports = router;
