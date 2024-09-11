const Employee = require('../models/Employee');

// Get all employees
exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find().populate('department position');
    res.json(employees);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};

// Add a new employee
exports.addEmployee = async (req, res) => {
  try {
    const { first_name, last_name, email, hire_date, department, position } = req.body;

    const employee = new Employee({
      first_name,
      last_name,
      email,
      hire_date,
      department,
      position
    });

    await employee.save();
    res.json(employee);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};
