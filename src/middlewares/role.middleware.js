// financial-records-backend\src\middlewares\role.middleware.js
const AppError = require('../utils/AppError');

const isAdmin = (req, res, next) => {
  if (!req.user) {
    return next(new AppError("Unauthorized", 401));
  }

  if (req.user.role !== "admin") {
    return next(new AppError("Only admin can access this", 403));
  }

  next();
};

const isAdminOrAnalyst = (req, res, next) => {
  if (!req.user) {
    return next(new AppError("Unauthorized", 401));
  }

  if (req.user.role !== "admin" && req.user.role !== "analyst") {
    return next(new AppError("Access denied", 403));
  }

  next();
};

module.exports = { isAdmin, isAdminOrAnalyst };