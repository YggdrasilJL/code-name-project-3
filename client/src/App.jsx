import './App.css';
import { ApolloProvider } from '@apollo/client';
import { client } from '../utils/apolloClient';

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
