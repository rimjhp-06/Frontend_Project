import React from 'react';
import { Route,Routes, Navigate,Router } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
  const authToken = localStorage.getItem('authToken');

  return (
    <Router>
    <Routes>
    <Route
      {...rest}
      render={(props) =>
        authToken ? (
          <Component {...props} />
        ) : (
          <Navigate to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
    </Routes>
    </Router>
  );
}

export default PrivateRoute;
