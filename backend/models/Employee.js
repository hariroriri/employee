const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    hire_date: { type: Date, required: true },
    department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
    position: { type: mongoose.Schema.Types.ObjectId, ref: 'Position' }
});

module.exports = mongoose.model('Employee', EmployeeSchema);
