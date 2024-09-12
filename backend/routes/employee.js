// routes/employee.js
const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee'); // Assuming you have a model

// @route   POST /api/employees
// @desc    Add a new employee
router.post('/', async (req, res) => {
  try {
    const newEmployee = await Employee.create(req.body);
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(500).json({ message: 'Error adding employee', error: error.message });
  }
});

// @route   GET /api/employees
// @desc    Get all employees
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching employees', error: error.message });
  }
});

module.exports = router;
