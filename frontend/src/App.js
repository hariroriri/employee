// src/App.js
import React from 'react';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Employee Management System</h1>
      <AddEmployee />
      <EmployeeList />
    </div>
  );
}

export default App;
