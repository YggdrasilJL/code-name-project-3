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

  const footerStyle = {
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
  };

  return (
    <footer className="avoid-particle bg-black text-white text-center" style={footerStyle}>
      <div className="mb-1">
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
