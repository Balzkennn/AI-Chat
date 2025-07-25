const express = require('express');
const cors = require('cors');
const { connectDB } = require('./config/db');
const authRoutes = require("./routes/auth.routes.js");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

module.exports = app;