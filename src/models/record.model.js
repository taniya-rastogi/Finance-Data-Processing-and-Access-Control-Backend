// financial-records-backend\src\models\record.model.js
const db = require('../config/db');

// Create record
const createRecord = async ({ amount, type, category, date, notes }) => {
  const [result] = await db.query(
    "INSERT INTO records (amount, type, category, date, notes) VALUES (?, ?, ?, ?, ?)",
    [amount, type, category, date, notes]
  );
  return result;
};

// Get records with filters
const getRecords = async ({ type, category }) => {
  let query = "SELECT * FROM records WHERE status = 'active'";
  const params = [];

  if (type) {
    query += " AND type = ?";
    params.push(type);
  }

  if (category) {
    query += " AND category = ?";
    params.push(category);
  }

  const [rows] = await db.query(query, params);
  return rows;
};

// Update record
const updateRecord = async (id, { amount, type, category, date, notes }) => {
  const [result] = await db.query(
    "UPDATE records SET amount=?, type=?, category=?, date=?, notes=? WHERE id=?",
    [amount, type, category, date, notes, id]
  );
  return result;
};

// Soft delete
const deleteRecord = async (id) => {
  const [result] = await db.query(
    "UPDATE records SET status='deleted' WHERE id=?",
    [id]
  );
  return result;
};


// ---------------- DASHBOARD ----------------

// Summary
const getSummary = async () => {
  const [income] = await db.query(
    "SELECT SUM(amount) as total FROM records WHERE type='income' AND status='active'"
  );

  const [expense] = await db.query(
    "SELECT SUM(amount) as total FROM records WHERE type='expense' AND status='active'"
  );

  return {
    totalIncome: income[0].total || 0,
    totalExpense: expense[0].total || 0,
    netBalance: (income[0].total || 0) - (expense[0].total || 0)
  };
};

// Category totals
const getCategoryTotals = async () => {
  const [rows] = await db.query(
    "SELECT category, SUM(amount) as total FROM records WHERE status='active' GROUP BY category"
  );
  return rows;
};

// Recent records
const getRecent = async () => {
  const [rows] = await db.query(
    "SELECT * FROM records WHERE status='active' ORDER BY date DESC LIMIT 5"
  );
  return rows;
};

// Trends (monthly)
const getTrends = async () => {
  const [rows] = await db.query(
    `SELECT DATE_FORMAT(date, '%Y-%m') as month, SUM(amount) as total
     FROM records
     WHERE status='active'
     GROUP BY month
     ORDER BY month`
  );
  return rows;
};

module.exports = {
  createRecord,
  getRecords,
  updateRecord,
  deleteRecord,
  getSummary,
  getCategoryTotals,
  getRecent,
  getTrends
};