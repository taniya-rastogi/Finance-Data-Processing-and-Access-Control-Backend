// financial-records-backend\src\validators\record.validator.js
const { body, param, query } = require("express-validator");

const createRecordValidator = [
  body("amount")
    .isFloat({ gt: 0 })
    .withMessage("Amount must be greater than 0"),

  body("type")
    .isIn(["income", "expense"])
    .withMessage("Type must be income or expense"),

  body("category")
    .notEmpty()
    .withMessage("Category is required"),

  body("date")
    .isISO8601()
    .withMessage("Valid date is required (YYYY-MM-DD)"),

  body("notes")
    .optional()
    .isString()
];

const updateRecordValidator = [
  param("id")
    .isInt()
    .withMessage("Record ID must be an integer"),

  body("amount")
    .optional()
    .isFloat({ gt: 0 })
    .withMessage("Amount must be greater than 0"),

  body("type")
    .optional()
    .isIn(["income", "expense"])
    .withMessage("Invalid type"),

  body("category")
    .optional()
    .notEmpty()
    .withMessage("Category cannot be empty"),

  body("date")
    .optional()
    .isISO8601()
    .withMessage("Invalid date"),

  body("notes")
    .optional()
    .isString()
];

const getRecordsValidator = [
  query("page")
    .optional()
    .isInt({ min: 1 })
    .withMessage("Page must be >= 1"),

  query("type")
    .optional()
    .isIn(["income", "expense"])
    .withMessage("Invalid type"),

  query("status")
    .optional()
    .isIn(["active", "deleted"])
    .withMessage("Invalid status")
];

module.exports = {
  createRecordValidator,
  updateRecordValidator,
  getRecordsValidator
};