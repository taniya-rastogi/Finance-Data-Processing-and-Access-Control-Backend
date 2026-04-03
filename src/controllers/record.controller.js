// financial-records-backend\src\controllers\record.controller.js
const Record = require('../models/record.model');

// Create
const createRecord = async (req, res, next) => {
  try {
    await Record.createRecord(req.body);
    res.status(201).json({ message: "Record created" });
  } catch (error) {
    next(error);
  }
};

// Get
const getRecords = async (req, res, next) => {
  try {
    const records = await Record.getRecords(req.query);
    res.json(records);
  } catch (error) {
    next(error);
  }
};

// Update
const updateRecord = async (req, res, next) => {
  try {
    await Record.updateRecord(req.params.id, req.body);
    res.json({ message: "Record updated" });
  } catch (error) {
    next(error);
  }
};

// Delete (soft)
const deleteRecord = async (req, res, next) => {
  try {
    await Record.deleteRecord(req.params.id);
    res.json({ message: "Record deleted" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createRecord,
  getRecords,
  updateRecord,
  deleteRecord
};