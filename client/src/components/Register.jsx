import React from 'react'

const Register = () => {
  return (
    <div>Register</div>
  )
}

export default Register

// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import { Auth0Provider } from '@auth0/auth0-react';
// import App from './App';

// const root = createRoot(document.getElementById('root'));

// root.render(
// <Auth0Provider
//     domain="{yourDomain}"
//     clientId="{yourClientId}"
//     authorizationParams={{
//       redirect_uri: window.location.origin
//     }}
//   >
//     <App />
//   </Auth0Provider>,
// );