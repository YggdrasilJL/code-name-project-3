import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom'; // Correct import
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Footer from './components/Footer';
import { GoogleOAuthProvider } from '@react-oauth/google';

const clientID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div className="min-h-screen">
      <ApolloProvider client={client}>
        <GoogleOAuthProvider clientId={clientID}>
          <Header />
          <Outlet />
          <Footer />
        </GoogleOAuthProvider>
      </ApolloProvider>
    </div>
  );
}

export default App;
