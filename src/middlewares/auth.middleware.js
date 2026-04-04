// financial-records-backend\src\middlewares\auth.middleware.js
const jwt = require("jsonwebtoken");
const AppError = require('../utils/AppError');

const authMiddleware = (req, res, next) => {
  try {
    const token =
      req.cookies?.token ||
      (req.headers.authorization &&
        req.headers.authorization.split(" ")[1]);

    if (!token) {
      throw new AppError("Unauthorized: No token provided", 401);
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    if (req.user.status === 'inactive') {
      throw new AppError("User is inactive", 403);
    }

    next();
  } catch (error) {
    next(new AppError("Unauthorized: Invalid token", 401));
  }
};

module.exports = { authMiddleware };