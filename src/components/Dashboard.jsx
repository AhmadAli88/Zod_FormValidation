import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      navigate('/login'); // Use navigate instead of history.push
    }
  }, [navigate]); // Update dependency to navigate

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login'); // Use navigate instead of history.push
  };

  if (!user) return null;

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title text-center mb-4">Welcome to Dashboard</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <button onClick={handleLogout} className="btn btn-danger w-100">Logout</button>
      </div>
    </div>
  );
}

export default Dashboard;
