import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

// fill with nav button styles/icons
// then in nav.jsx import LoginButton and use it

const LoginButton = ({ onLoginButtonClick }) => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button onClick={loginWithRedirect}>
      Login
    </button>
  );
};

// export default LoginButton;