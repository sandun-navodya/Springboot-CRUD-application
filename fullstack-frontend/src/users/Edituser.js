import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditUser() {
  const [user, setUser] = useState({
    name: "",
    stdId: "",
    email: ""
  });

  const [error, setError] = useState(""); // State to manage error messages
  const navigate = useNavigate();
  const { id } = useParams(); // Get the user ID from the URL

  const {stdId, name, email } = user;

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/user/${id}`); // Use backticks for template literals
      setUser(result.data);
    } catch (err) {
      setError("Failed to load user data. Please try again.");
    }
  };

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    // Check if any field is empty
    if (!name || !stdId || !email) {
      setError("All fields are required!");
      return;
    }

    try {
      await axios.put(`http://localhost:8080/user/${id}`, user); // Use backticks for template literals
      navigate("/"); // Redirect to the homepage after submission
    } catch (err) {
      setError("Failed to update the user. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>Edit User</h2>
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
            <button type="submit" className="btn btn-outline-primary me-2">Update</button>
            <button type="button" className="btn btn-danger" onClick={() => navigate("/")}>Cancel</button>
          </form>
        </div>
      </div>
    </div>
  );
}