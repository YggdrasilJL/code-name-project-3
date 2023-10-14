
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
import { Outlet } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Footer from './components/Footer';

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
=======

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/lessons',
    element: <Lessons />,
    children: [
      {
        path: ':id',
        element: <Lesson1 />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/messages',
    element: <UserMessages />,
  },
  {
    path: '/logout',
    element: <Login />,
  },
  {
    path: '*',
    element: <Home />,
  },
]);



  function App() {
    return (
      <ApolloProvider client={client}>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Outlet />
          </div>
          <Footer />
        </div>
      </ApolloProvider>
    );
  }
  
  export default App;