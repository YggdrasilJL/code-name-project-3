// components
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Lesson1 from './components/Lessons/Lesson1';
import Lessons from './components/Lessons/Lessons';
import Lesson2 from './components/Lessons/Lesson2';
import Register from './components/Register';
import Login from './components/Login';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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
        path: 'lesson1',
        element: <Lesson1 />,
      },
      {
        path: 'lesson2',
        element: <Lesson2 />,
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
  {},
]);

const App = () => {
  return (
    <main>
      <RouterProvider router={routes} fallbackElement={<Home />} />
    </main>
  );
};

export default App;
