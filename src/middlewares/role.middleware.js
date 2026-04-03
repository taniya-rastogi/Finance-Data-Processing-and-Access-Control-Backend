// financial-records-backend\src\middlewares\role.middleware.js
const isAdmin = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({
      message: "Unauthorized"
    });
  }

  if (req.user.role !== "admin") {
    return res.status(403).json({
      message: "Only admin can access this"
    });
  }

  next();
};

const isAdminOrAnalyst = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({
      message: "Unauthorized"
    });
  }

  if (
    req.user.role !== "admin" &&
    req.user.role !== "analyst"
  ) {
    return res.status(403).json({
      message: "Access denied"
    });
  }

  next();
};

module.exports = { isAdmin, isAdminOrAnalyst };