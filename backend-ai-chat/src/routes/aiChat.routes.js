const express = require("express");
const { handleChat } = require("../controllers/ai.controller");
const verifyToken = require("../middleware/auth.middleware");

const router = express.Router();

router.post("/chat", verifyToken, handleChat); // ✅ Butuh token

module.exports = router;
