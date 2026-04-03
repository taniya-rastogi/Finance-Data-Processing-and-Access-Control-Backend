// financial-records-backend\src\controllers\dashboard.controller.js
const Record = require('../models/record.model');

const getSummary = async (req, res, next) => {
  try {
    const data = await Record.getSummary();
    res.json(data);
  } catch (error) {
    next(error);
  }
};

const getCategoryTotals = async (req, res, next) => {
  try {
    const data = await Record.getCategoryTotals();
    res.json(data);
  } catch (error) {
    next(error);
  }
};

const getRecent = async (req, res, next) => {
  try {
    const data = await Record.getRecent();
    res.json(data);
  } catch (error) {
    next(error);
  }
};

const getDashboard = async (req, res, next) => {
  try {
    const { trend, category, startDate, endDate } = req.query;

    const data = await Record.getDashboardData({
      trend,
      category,
      startDate,
      endDate
    });

    res.json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getSummary,
  getCategoryTotals,
  getRecent,
  getDashboard
};