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

const getTrends = async (req, res, next) => {
  try {
    const data = await Record.getTrends();
    res.json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getSummary,
  getCategoryTotals,
  getRecent,
  getTrends
};