import React from 'react';

const LoginButton = ({ onLoginButtonClick }) => {
  return (
    <button onClick={onLoginButtonClick}>
      Login
    </button>
  );
};

export default LoginButton;