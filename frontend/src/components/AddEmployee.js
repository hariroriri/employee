import React, { useState } from 'react';

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    first_name: '',
    last_name: '',
    email: '',
    hire_date: '',
    department: '',
    position: ''
  });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:5000/api/employees', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(employee),
      });
  
      if (response.ok) {
        alert('Employee added successfully!');
        setEmployee({
          first_name: '',
          last_name: '',
          email: '',
          hire_date: '',
          department: '',
          position: ''
        });
      } else {
        const errorData = await response.json();
        console.error('Error details:', errorData); // Log the detailed error
        throw new Error(errorData.message || 'Error adding employee');
      }
    } catch (err) {
      console.error('Error:', err.message);
      alert(`Error adding employee: ${err.message}`);
    }
  };
  

  return (
    <div>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          value={employee.first_name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          value={employee.last_name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={employee.email}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="hire_date"
          value={employee.hire_date}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="department"
          placeholder="Department ID"
          value={employee.department}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="position"
          placeholder="Position ID"
          value={employee.position}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployee;
