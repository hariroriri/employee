const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const employeeRoutes = require('./routes/employee');
const path = require('path'); 
const cors = require('cors'); 

// Configure dotenv to load environment variables from config.env
dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });

// Connect to MongoDB
connectDB();

// Middleware to parse JSON and enable CORS
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/employees', employeeRoutes);

// Error handling for undefined routes
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server listening on Port ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});
