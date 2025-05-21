import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/user/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (err) {
      console.error("Failed to delete user:", err);
    }
  };

  return (
    <div className='container'>
      <div className='py-4'>
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Student No</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <th scope="row">{index + 1}</th>
                <td>{user.stdId}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button
              className="btn btn-primary mx-2"
              onClick={() => navigate(`/viewuser/${user.id}`)} // Navigate to ViewUser page
            >
                  View
                </button>
                  <button
                    className="btn btn-outline-primary mx-2"
                    onClick={() => navigate(`/edituser/${user.id}`)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}