const express = require('express');
const cors = require('cors');
const { connectDB } = require('./config/db');
const authRoutes = require("./routes/auth.routes.js");
const aiRoutes = require("./routes/aiChat.routes.js");

const app = express();

connectDB(); // ✅ Connect ke MongoDB

app.use(cors()); // ✅ Allow frontend (jangan lupa asalnya)
app.use(express.json()); // ✅ Untuk body JSON
app.use("/api/ai", aiRoutes);

app.use("/api/auth", authRoutes);// ✅ Auth route terdaftar

app.get('/', (req, res) => {
  res.send('API is running...');
});
