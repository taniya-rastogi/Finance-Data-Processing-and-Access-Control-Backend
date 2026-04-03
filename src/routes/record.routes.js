// financial-records-backend\src\routes\record.routes.js
const express = require('express');
const router = express.Router();

const {
  createRecord,
  getRecords,
  updateRecord,
  deleteRecord
} = require('../controllers/record.controller');

const { authMiddleware } = require('../middlewares/auth.middleware');
const { isAdmin } = require('../middlewares/role.middleware');
const { isAdminOrAnalyst } = require('../middlewares/role.middleware');

// Create record (Admin only)
router.post('/', authMiddleware, isAdmin, createRecord);

// Get records (Analyst + Admin)
router.get('/', authMiddleware, isAdminOrAnalyst, getRecords);

// Update record (Admin only)
router.put('/:id', authMiddleware, isAdmin, updateRecord);

// Soft delete (Admin only)
router.delete('/:id', authMiddleware, isAdmin, deleteRecord);

module.exports = router;