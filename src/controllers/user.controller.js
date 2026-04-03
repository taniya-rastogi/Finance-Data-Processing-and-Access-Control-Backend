// financial-records-backend\src\controllers\user.controller.js
const bcryptjs = require('bcryptjs');
const User = require('../models/user.model');

// Get all users
const getUsers = async (req, res, next) => {
  try {
    const users = await User.getAllUsers();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

// Admin creates user
const createUserByAdmin = async (req, res, next) => {
  try {
    const { email, password, role } = req.body;

    const hashedPassword = await bcryptjs.hash(password, 10);

    await User.createUser({
      email,
      password: hashedPassword,
      role
    });

    res.status(201).json({ message: "User created" });

  } catch (error) {
    next(error);
  }
};

// Update role
const updateUserRole = async (req, res, next) => {
  try {
    const { role } = req.body;

    await User.updateRole(req.params.id, role);

    res.json({ message: "Role updated" });

  } catch (error) {
    next(error);
  }
};

// Update user
const updateUser = async (req, res, next) => {
  try {
    const { email, status } = req.body;

    await User.updateUser(req.params.id, { email, status });

    res.json({ message: "User updated" });

  } catch (error) {
    next(error);
  }
};

// Delete user
const deleteUser = async (req, res, next) => {
  try {
    await User.deleteUser(req.params.id);
    res.json({ message: "User deleted" });

  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUsers,
  createUserByAdmin,
  updateUserRole,
  updateUser,
  deleteUser
};