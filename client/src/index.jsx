import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import './index.css';
//import { Auth0Provider } from '@auth0/auth0-react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import auth from '..//utils/auth.js';

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql",
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
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
  </React.StrictMode>,
);
