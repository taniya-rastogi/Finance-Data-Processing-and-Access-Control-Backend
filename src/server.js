// financial-records-backend\src\server.js
require("dotenv").config();

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/user.routes');
const authRoutes = require('./routes/auth.routes.js');
const recordRoutes = require('./routes/record.routes.js');
const dashboardRoutes = require('./routes/dashboard.routes.js');
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const { errorHandler } = require('./middlewares/error.middleware');

const app = express();
const port = process.env.PORT || 3000;

// -------------------- Rate Limit --------------------
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});

// -------------------- Middlewares --------------------
app.use(helmet());

app.use(cors({
  origin: [
    process.env.FRONTEND_URL_1,
    process.env.FRONTEND_URL_2
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api", limiter);

// -------------------- Test API --------------------
app.get("/", (req, res) => {
  res.json({ message: "Backend is running" });
});

// -------------------- Routes --------------------
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/records', recordRoutes);
app.use('/api/dashboard', dashboardRoutes);

// -------------------- Error Middleware --------------------
app.use(errorHandler);

// -------------------- Server Start --------------------
app.listen(port, () => {
  console.log(`Backend is running on port ${port}`);
});