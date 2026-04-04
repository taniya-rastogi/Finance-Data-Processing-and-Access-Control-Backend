// financial-records-backend\src\validators\user.validator.js
const { body, param } = require("express-validator");

const createUserValidator = [
  body("email")
    .isEmail()
    .withMessage("Valid email is required"),

  body("password")
    .isLength({ min: 3 })
    .withMessage("Password must be at least 3 characters"),

  body("role")
    .optional()
    .isIn(["viewer", "analyst", "admin"])
    .withMessage("Invalid role")
];

const updateUserValidator = [
  param("id")
    .isInt()
    .withMessage("User ID must be an integer"),

  body("email")
    .optional()
    .isEmail()
    .withMessage("Valid email required"),

  body("status")
    .optional()
    .isIn(["active", "inactive"])
    .withMessage("Invalid status")
];

const updateUserRoleValidator = [
  param("id")
    .isInt()
    .withMessage("User ID must be an integer"),

  body("role")
    .isIn(["viewer", "analyst", "admin"])
    .withMessage("Invalid role")
];

module.exports = {
  createUserValidator,
  updateUserValidator,
  updateUserRoleValidator
};