import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export default function ViewuserByStudentId() {
  const [user, setUser] = useState({
    stdId: "",
    name: "",
    email: ""
  });
  const [error, setError] = useState("");
  const { stdId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    loadUser();
    
  }, []);

  const loadUser = async () => {
  try {
    const result = await axios.get(`http://localhost:8080/user/stdId`, {
      params: { stdId }
    });
    console.log(result.data); 
    setUser(result.data);
  } catch (err) {
    setError("User not found or error fetching user.");
  }
};

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">User Details</h2>
          {error ? (
            <div className="alert alert-danger">{error}</div>
          ) : (
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
          )}
          <button className="btn btn-primary mt-3" onClick={() => navigate("/")}>
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}