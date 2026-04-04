// financial-records-backend\src\routes\auth.routes.js
const express = require('express');
const router = express.Router();
const { registerValidator, loginValidator } = require('../validators/auth.validator');
const { validate } = require('../middlewares/validation.middleware');


const {
  login,
  createUser
} = require('../controllers/auth.controller');

// Public registration
router.post('/register', registerValidator, validate, createUser);

// Login
router.post('/login', loginValidator, validate, login);


module.exports = router;