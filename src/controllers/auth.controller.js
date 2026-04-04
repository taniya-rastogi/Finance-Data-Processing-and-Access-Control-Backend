const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const AppError = require('../utils/AppError');
const User = require('../models/user.model');

// Register
const createUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    const existingUser = await User.findByEmail(email);

    if (existingUser) {
      throw new AppError("User already exists", 400);
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    await User.createUser({
      email,
      password: hashedPassword
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully"
    });

  } catch (error) {
    next(error);
  }
};

// Login
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findByEmail(email);

    if (!user) {
      throw new AppError("Invalid credentials", 401);
    }

    const isMatch = await bcryptjs.compare(password, user.password);

    if (!isMatch) {
      throw new AppError("Invalid credentials", 401);
    }

    if (user.status === 'inactive') {
      throw new AppError("User is inactive", 403);
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.COOKIE_SECURE === "true",
      sameSite: process.env.COOKIE_SAMESITE
    });

    res.json({
      success: true,
      message: "Login successful"
    });

  } catch (error) {
    next(error);
  }
};

module.exports = { createUser, login };