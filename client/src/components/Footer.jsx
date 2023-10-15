import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <footer className="bg-black text-white p-4 text-center">
       <div className="container text-center mb-5">
        {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-3"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )}
        <h4>
          Created by the CyberScript Team.
        </h4>
      </div>
      {/* footer content here , not sure what we want here yet  */}
      <p>&copy; {new Date().getFullYear()} CyberScript</p>
    </footer>
  );
};

export default Footer;

