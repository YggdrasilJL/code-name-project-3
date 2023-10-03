import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login'; 
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Login /> {/* Render the Login component here */}
  </React.StrictMode>,
);
