import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export default function ViewUser() {
  const [user, setUser] = useState({
    stdId: "",
    name: "",
    email: ""
  });

  const { id } = useParams(); // Get the user ID from the URL
  const navigate = useNavigate();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/user/${id}`); // Fetch user details by ID
      setUser(result.data);
    } catch (err) {
      console.error("Failed to fetch user details:", err);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">User Details</h2>
          <ul className="list-group">

             <li className="list-group-item">
              <strong>Student Number:</strong> {user.stdId}
            </li>

            <li className="list-group-item">
              <strong>Name:</strong> {user.name}
            </li>
           
            <li className="list-group-item">
              <strong>Email:</strong> {user.email}
            </li>
            
          </ul>
          <button className="btn btn-primary mt-3" onClick={() => navigate("/")}>
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}