// financial-records-backend\src\routes\dashboard.routes.js
const express = require('express');
const router = express.Router();

const {
  getSummary,
  getCategoryTotals,
  getRecent,
  getDashboard
  // getTrends
} = require('../controllers/dashboard.controller');

const { authMiddleware } = require('../middlewares/auth.middleware');

// All roles can access dashboard
router.get('/summary', authMiddleware, getSummary);
router.get('/category', authMiddleware, getCategoryTotals);
router.get('/recent', authMiddleware, getRecent);
router.get('/', authMiddleware, getDashboard);


module.exports = router;