import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (location.pathname !== '/') {
      navigate(-1);
    }
  };

  return (
    <footer className="bg-black text-white p-4 text-center" style={{ position: 'fixed', bottom: 0, width: '100%' }}>
      <div className="container text-center mb-5">
        {location.pathname !== '/' && (
          <button className="btn btn-dark mb-3" onClick={handleGoBack}>
            &larr; Go Back
          </button>
        )}
        <h4>Created by the CyberScript Team</h4>
      </div>
      {/* Additional footer content can be added here */}
      <p>&copy; {new Date().getFullYear()} CyberScript</p>
    </footer>
  );
};

export default Footer;
