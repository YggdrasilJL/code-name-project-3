import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Lesson1 from './components/Lessons/Lesson';
import Lesson2 from './components/Lessons/Lesson2';
import Register from './components/Register';
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from './components/Profile'

const App = () => {
  return (
    <main>
      <h1>Auth0 Login</h1>
      <LoginButton/>
      <LogoutButton/>
      <Profile/>
    </main>
  )
};

export default App;
