const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
    employee: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
    attendance_date: { type: Date, required: true },
    status: { type: String, required: true } // e.g., Present, Absent, Late
});

module.exports = mongoose.model('Attendance', AttendanceSchema);
