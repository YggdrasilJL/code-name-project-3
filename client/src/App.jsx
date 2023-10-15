
// // components
// import Dashboard from './components/Dashboard';
// import Footer from './components/Footer';
// import Header from './components/Header';
// import Home from './components/Home';
// import Lesson1 from './components/Lessons/Lesson1';
// import Lessons from './components/Lessons/Lessons';
// import Lesson2 from './components/Lessons/Lesson2';
// import Register from './components/Register';
// //import LoginButton from "./components/LoginButton";
// //import LogoutButton from "./components/LogoutButton";
// import Profile from './components/Profile';
// import UserMessages from './components/UserMessages';
// import Login from './components/Login';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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
import Home from './components/Home';  // Make sure to import your components
import Lessons from './components/Lessons';
import Lesson1 from './components/Lesson1';
import Register from './components/Register';
import Profile from './components/Profile';
import Login from './components/Login';
import UserMessages from './components/UserMessages';


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
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/lessons" element={<Lessons />}>
                <Route path=":id" element={<Lesson1 />} />
              </Route>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/messages" element={<UserMessages />} />
              <Route path="/logout" element={<Login />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;