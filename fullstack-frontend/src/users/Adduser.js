import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Adduser() {
  const [user, setUser] = useState({
    stdId: "",
    name: "",
    email: ""
  });

  const [error, setError] = useState(""); // State to manage error messages
  const navigate = useNavigate();

  const { stdId,name,email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    // Check if any field is empty
    if (!stdId || !name || !email) {
      setError("All fields are required!");
      return;
    }

    try {
      await axios.post("http://localhost:8080/user", user); // Replace with your backend API URL
      navigate("/"); // Redirect to the homepage after submission
    } catch (err) {
      setError("Failed to submit the form. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>Add User</h2>
          {error && <div className="alert alert-danger">{error}</div>} 
          <form onSubmit={onSubmit}>
            
            <div className="mb-3">
              <label htmlFor="stdId" className="form-label">Student Number</label>
              <input
                type="text"
                className="form-control"
                id="stdId"
                name="stdId"
                placeholder="Enter your Student Number"
                value={stdId}
                onChange={onInputChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Enter your Name"
                value={name}
                onChange={onInputChange}
              />
            </div>

           <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={onInputChange}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary me-2">Submit</button>
            <button type="button" className="btn btn-danger" onClick={() => navigate("/")}>Cancel</button>
          </form>
        </div>
      </div>
    </div>
  );
}