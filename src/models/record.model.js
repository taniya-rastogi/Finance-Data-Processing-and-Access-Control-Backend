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

// // Get records with filters
// const getRecords = async ({ type, category, search, status, role, page = 1 }) => {

//   const limit = 5;
//   const pageNumber = Number(page) || 1;
//   const offset = (pageNumber - 1) * limit;

//   let selectFields = `
//     id, amount, type, category, date, notes
//   `;

//   if (role === "admin") {
//     selectFields += ", created_at, updated_at, status";
//   }

//   let query = `SELECT ${selectFields} FROM records`;
//   const params = [];

//   // Role-based base condition
//   if (role !== "admin") {
//     query += " WHERE status = 'active'";
//   } else {
//     query += " WHERE 1=1";
//   }

//   // Admin can filter by status
//   if (role === "admin" && status) {
//     query += " AND status = ?";
//     params.push(status);
//   }

//   // Filters
//   if (type) {
//     query += " AND type = ?";
//     params.push(type);
//   }

//   if (category) {
//     query += " AND category = ?";
//     params.push(category);
//   }

//   // Search (only text fields)
//   if (search && search.trim() !== "") {
//     const searchValue = `${search.trim()}%`;

//     query += ` AND (
//       type LIKE ? OR 
//       category LIKE ?
//     )`;

//     params.push(searchValue, searchValue);
//   }

//   // Add pagination
//   query += " LIMIT ? OFFSET ?";
//   params.push(limit, offset);

//   const [rows] = await db.query(query, params);
//   return rows;
// };

const getRecords = async ({ type, category, search, status, role, page = 1 }) => {

  const limit = 5;
  const pageNumber = Number(page) || 1;
  const offset = (pageNumber - 1) * limit;

  let selectFields = `
    id, amount, type, category, date, notes
  `;

  if (role === "admin") {
    selectFields += ", created_at, updated_at, status";
  }

  let baseQuery = `FROM records`;
  let whereClause = "";
  const params = [];

  // Role-based base condition
  if (role !== "admin") {
    whereClause += " WHERE status = 'active'";
  } else {
    whereClause += " WHERE 1=1";
  }

  // Admin can filter by status
  if (role === "admin" && status) {
    whereClause += " AND status = ?";
    params.push(status);
  }

  // Filters
  if (type) {
    whereClause += " AND type = ?";
    params.push(type);
  }

  if (category) {
    whereClause += " AND category = ?";
    params.push(category);
  }

  // Search (IMPROVED)
  if (search && search.trim() !== "") {
    const searchValue = `%${search.trim()}%`;

    whereClause += ` AND (
      type LIKE ? OR 
      category LIKE ?
    )`;

    params.push(searchValue, searchValue);
  }

  // ---------------- COUNT QUERY ----------------
  const countQuery = `SELECT COUNT(*) as total ${baseQuery} ${whereClause}`;
  const [countResult] = await db.query(countQuery, params);

  const total = countResult[0].total;

  // ---------------- DATA QUERY ----------------
  const dataQuery = `
    SELECT ${selectFields}
    ${baseQuery}
    ${whereClause}
    LIMIT ? OFFSET ?
  `;

  const dataParams = [...params, limit, offset];

  const [rows] = await db.query(dataQuery, dataParams);

  // ---------------- RESPONSE ----------------
  return {
    data: rows,
    total,
    page: pageNumber,
    totalPages: Math.ceil(total / limit)
  };
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

// Dashboard data
const getDashboardData = async ({ trend, category, startDate, endDate }) => {
  let where = "WHERE status='active'";
  const params = [];

  // Category filter
  if (category) {
    where += " AND category = ?";
    params.push(category);
  }

  // Date filters
  if (startDate && endDate) {
    where += " AND date BETWEEN ? AND ?";
    params.push(startDate, endDate);
  }

  // Trend grouping
  let groupBy = "";
  let selectTrend = "";

  if (trend === "weekly") {
    selectTrend = "CONCAT(YEAR(date), '-W', LPAD(WEEK(date, 1), 2, '0')) as period";
    groupBy = "YEARWEEK(date, 1)";
  } else if (trend === "monthly") {
    selectTrend = "DATE_FORMAT(date, '%Y-%m') as period";
    groupBy = "DATE_FORMAT(date, '%Y-%m')";
  } else if (trend === "yearly") {
    selectTrend = "YEAR(date) as period";
    groupBy = "YEAR(date)";
  } else {
    // default → daily
    selectTrend = "DATE(date) as period";
    groupBy = "DATE(date)";
  }

  const [rows] = await db.query(
    `SELECT 
        ${selectTrend},
        SUM(CASE WHEN type='income' THEN amount ELSE 0 END) as totalIncome,
        SUM(CASE WHEN type='expense' THEN amount ELSE 0 END) as totalExpense
     FROM records
     ${where}
     GROUP BY ${groupBy}
     ORDER BY period ASC`,
    params
  );

  return rows.map(r => ({
    period: r.period,
    totalIncome: r.totalIncome,
    totalExpense: r.totalExpense,
    netBalance: r.totalIncome - r.totalExpense
  }));
};

const getCategoryTotals = async () => {
  const [rows] = await db.query(`
    SELECT 
      category,
      SUM(CASE WHEN type='income' THEN amount ELSE 0 END) as totalIncome,
      SUM(CASE WHEN type='expense' THEN amount ELSE 0 END) as totalExpense
    FROM records
    WHERE status='active'
    GROUP BY category
  `);

  return rows.map(row => ({
    category: row.category,
    totalIncome: row.totalIncome,
    totalExpense: row.totalExpense,
    netBalance: row.totalIncome - row.totalExpense
  }));
};

// Recent records
const getRecent = async () => {
  const [rows] = await db.query(
    "SELECT * FROM records WHERE status='active' ORDER BY date DESC LIMIT 5"
  );
  return rows;
};

// Trends (date/weekly/monthly/yearly/range)
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
  getTrends,
  getDashboardData
};