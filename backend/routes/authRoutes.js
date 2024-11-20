const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Register user
router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = new User({ email, password });
    await user.save();
    res.status(201).send('User registered');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Login user
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send('User not found');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send('Invalid credentials');
    }

    // Generate 2FA code
    const twoFactorCode = Math.floor(100000 + Math.random() * 900000); // 6 digit code
    user.twoFactorCode = twoFactorCode;
    user.twoFactorExpires = new Date(Date.now() + 10 * 60000); // 10 minutes validity
    await user.save();

    // Send 2FA code by email
    await transporter.sendMail({
      to: email,
      subject: 'Your 2FA Code',
      text: `Your 2FA code is ${twoFactorCode}`,
    });

    res.send('Please check your email for the 2FA code');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Verify 2FA - Update the response to include a success flag
router.post('/verify-2fa', async (req, res) => {
  const { email, twoFactorCode } = req.body;
  try {
    const user = await User.findOne({ email, twoFactorCode, twoFactorExpires: { $gt: new Date() } });
    if (!user) {
      return res.status(400).json({ success: false, message: 'Invalid or expired 2FA code' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ 
      success: true, 
      token,
      message: 'Authentication successful' 
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
