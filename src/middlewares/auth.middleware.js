// financial-records-backend\src\middlewares\auth.middleware.js
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    // Get token from cookie OR Authorization header
    const token =
      req.cookies?.token ||
      (req.headers.authorization &&
        req.headers.authorization.split(" ")[1]);

    if (!token) {
      return res.status(401).json({
        message: "Unauthorized: No token provided"
      });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user data to request
    req.user = decoded;

    if (req.user.status === 'inactive') {
      return res.status(403).json({ message: "User is inactive" });
    }

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized: Invalid token"
    });
  }
};

module.exports = { authMiddleware };