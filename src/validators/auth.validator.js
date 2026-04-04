// financial-records-backend\src\validators\auth.validator.js
const { body } = require("express-validator");

const registerValidator = [
  body("email")
    .isEmail()
    .withMessage("Valid email is required"),

  body("password")
    .isLength({ min: 3 })
    .withMessage("Password must be at least 3 characters long")
];

const loginValidator = [
  body("email")
    .isEmail()
    .withMessage("Valid email is required"),

  body("password")
    .notEmpty()
    .withMessage("Password is required")
];

module.exports = {
  registerValidator,
  loginValidator
};