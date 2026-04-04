// financial-records-backend\src\controllers\record.controller.js
const AppError = require('../utils/AppError');
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
    const role = req.user.role;
    const records = await Record.getRecords({...req.query, role});
    res.json(records);
  } catch (error) {
    next(error);
  }
};

// Update
const updateRecord = async (req, res, next) => {
  try {
    const result = await Record.updateRecord(req.params.id, req.body);

    if (result.affectedRows === 0) {
      throw new AppError("Record not found", 404);
    }

    res.json({
      success: true,
      message: "Record updated"
    });

  } catch (error) {
    next(error);
  }
};

// Delete (soft)
const deleteRecord = async (req, res, next) => {
  try {
    const result = await Record.deleteRecord(req.params.id);

    if (result.affectedRows === 0) {
      throw new AppError("Record not found", 404);
    }

    res.json({
      success: true,
      message: "Record deleted"
    });

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