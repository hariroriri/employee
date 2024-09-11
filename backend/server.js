const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const employeeRoutes = require('./routes/employee');
const path = require('path'); // Add this line to import path

// Configure dotenv to load environment variables from config.env
dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });

// Connect to MongoDB
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api/employees', employeeRoutes);

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server listening on Port ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});
