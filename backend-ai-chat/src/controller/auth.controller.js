const User = require('../models/user.model.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username sudah digunakan' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: 'Register berhasil' });
  } catch (error) {
    console.error('[REGISTER ERROR]:', error.message);
    res.status(500).json({ message: 'Terjadi kesalahan pada sisi server' });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'Username tidak ditemukan' });
    }

    const isPasswordTrue = await bcrypt.compare(password, user.password);
    if (!isPasswordTrue) {  
      return res.status(401).json({ message: 'Password salah' });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.status(200).json({
      message: 'Berhasil login',
      token,
    });
  } catch (error) {
    console.error('LOGIN ERROR:', error.message);
    res.status(500).json({ message: 'Terjadi kesalahan pada server' });
  }
};
