import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';  // Correct import
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
const audience = import.meta.env.VITE_AUTH0_AUDIENCE;

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const { getAccessTokenSilently } = useAuth0();
  const token = getAccessTokenSilently();

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <Auth0Provider
    domain={domain}
    clientId={clientId}
    audience={audience}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    useRefreshTokens
    cacheLocation="localstorage"
    >
      <ApolloProvider client={client}>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Outlet />
          </div>
          <Footer />
        </div>
      </ApolloProvider>
    </Auth0Provider>
  );
}

export default App;