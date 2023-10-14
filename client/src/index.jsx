import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import UserMessages from './components/UserMessages';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import Auth from '..//utils/auth.js'; 

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
  const router = createBrowserRouter([
    {
      path: "/",
      element:(Auth.loggedIn? (<Login/>) : (<div>You’re not logged in</div> )),
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />
        }, {
          path: '/login',
          element: <Login />
        }, {
          path: '/dashboard',
          element: <Dashboard />
        }, {
          path: '/register',
          element: <Register />
        }, {
          path: '/profiles/:username',
          element: <Profile />
        }, {
          path: '/me',
          element: <Profile />
        }, {
          path: '/messages/:messageId',
          element: <UserMessages />
        }
      ]
    },
  ]);

  ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  )
