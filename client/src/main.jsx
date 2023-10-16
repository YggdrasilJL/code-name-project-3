import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import UserMessages from './components/UserMessages';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import ErrorPage from './components/ErrorPage';
import HTML from './components/Html';
import Css from './components/Css';
import JavaScript from './components/JavaScript';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [{
      path: '*',
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
    }, {
      path: '/JavaScript',
      element: <JavaScript />
    }, {
      path: '/Html',
      element: <HTML />
    }, {
      path: '/Css',
      element: <Css />
    }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
