import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import auth from './Auth';

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache(),
  request: operation => {
    operation.setContext(context => ({
      headers: {
        ...context.headers,
        authorization: auth.getIdToken(),
      },
    }));
  },
});

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientID = process.env.REACT_APP_AUTH0_CLIENT_ID

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientID}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: "https://dev-2kax28qvyzlsa7s0.us.auth0.com/api/v2/",
        scope: "read:current_user update:current_user_metadata"
      }}
    >
      <ApolloProvider>
        <App />
      </ApolloProvider>

    </Auth0Provider>
  </React.StrictMode>,
);
