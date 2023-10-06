import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Lesson1 from './components/Lessons/Lesson';
import Lesson2 from './components/Lessons/Lesson2';
import Register from './components/Register';
import LoginButton from "./components/LoginButton";
import Login from "./components/Login";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import UserMessages from "./components/UserMessages";

const App = () => {
  return (
    <main>
      <Profile/>
      <Dashboard/>
    </main>
  )
};

export default App;
