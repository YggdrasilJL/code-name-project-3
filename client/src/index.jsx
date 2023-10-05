import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login'; 
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const client = process.env.REACT_APP_AUTH0_CLIENT,

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUrl={window.location.origin}
  >
    <App />
    </Auth0Provider>
  </React.StrictMode>
);

