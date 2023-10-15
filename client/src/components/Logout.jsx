import React from 'react';
import auth from '../../utils/auth.js';

const Logout = ({ isAuthenticated, history }) => {
  const logout = () => {
    auth.logout();
    history.replace('/');
  };

  return (
    isAuthenticated && (
      <button onClick={logout}>
        Log Out
      </button>
    )
  );
};

export default Logout;

