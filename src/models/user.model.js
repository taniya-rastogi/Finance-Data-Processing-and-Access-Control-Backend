// financial-records-backend\src\models\user.model.js
const db = require('../config/db');

// Create user
const createUser = async ({ email, password, role = 'viewer' }) => {
  const [result] = await db.query(
    "INSERT INTO users (email, password, role) VALUES (?, ?, ?)",
    [email, password, role]
  );
  return result;
};

// Find user by email
const findByEmail = async (email) => {
  const [rows] = await db.query(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );
  return rows[0];
};

// Get all users
const getAllUsers = async () => {
  const [rows] = await db.query(
    "SELECT id, email, role, status FROM users"
  );
  return rows;
};

// Update role
const updateRole = async (id, role) => {
  const [result] = await db.query(
    "UPDATE users SET role = ? WHERE id = ?",
    [role, id]
  );
  return result;
};

// Update user
const updateUser = async (id, { email, status }) => {
  const [result] = await db.query(
    "UPDATE users SET email = ?, status = ? WHERE id = ?",
    [email, status, id]
  );
  return result;
};

// Delete user
const deleteUser = async (id) => {
  const [result] = await db.query(
    "DELETE FROM users WHERE id = ?",
    [id]
  );
  return result;
};

module.exports = {
  createUser,
  findByEmail,
  getAllUsers,
  updateRole,
  updateUser,
  deleteUser
};