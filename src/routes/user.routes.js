// financial-records-backend\src\routes\user.routes.js
const express = require('express');
const router = express.Router();

const {
  getUsers,
  updateUserRole,
  updateUser,
  deleteUser,
  createUserByAdmin
} = require('../controllers/user.controller');

const { authMiddleware } = require('../middlewares/auth.middleware');
const { isAdmin } = require('../middlewares/role.middleware');

// Get all users (admin)
router.get('/', authMiddleware, isAdmin, getUsers);

// Admin creates user
router.post('/', authMiddleware, isAdmin, createUserByAdmin);

// Update role
router.patch('/:id/role', authMiddleware, isAdmin, updateUserRole);

// Update user (email, etc.)
router.put('/:id', authMiddleware, isAdmin, updateUser);

// Delete user
router.delete('/:id', authMiddleware, isAdmin, deleteUser);

module.exports = router;