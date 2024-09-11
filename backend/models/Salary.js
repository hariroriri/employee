const mongoose = require('mongoose');

const SalarySchema = new mongoose.Schema({
    employee: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
    salary_amount: { type: Number, required: true },
    effective_date: { type: Date, required: true }
});

module.exports = mongoose.model('Salary', SalarySchema);
