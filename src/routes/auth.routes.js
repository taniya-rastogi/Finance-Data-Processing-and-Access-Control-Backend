// financial-records-backend\src\routes\auth.routes.js
const express = require('express');
const router = express.Router();

const {
  login,
  createUser
} = require('../controllers/auth.controller');

// Public registration
router.post('/register', createUser);

// Login
router.post('/login', login);


module.exports = router;