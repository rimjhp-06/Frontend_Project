import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  const authToken = localStorage.getItem('authToken');

  return (
    <nav>
      <ul>
        <li>
          <Link to="/login">Home</Link>
        </li>
        {authToken ? (
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
