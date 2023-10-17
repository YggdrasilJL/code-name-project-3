import React from 'react';
import Leaderboard from './Leaderboard'; // Import your Leaderboard component

const Dashboard = () => {
  return (
    <div className="dashboard-container flex">
      <section className="mb-4 p-4 bg-black bg-opacity-80 rounded-lg border border-cyber-blue left-section flex-1">
        <Leaderboard />
      </section>
      <section className="mb-4 p-4 bg-black bg-opacity-80 rounded-lg border border-cyber-blue middle-section flex-1">
        <br></br>
        <h1><span className="glow-red">HTML City</span></h1>
        <div className="lesson-buttons">
          {/* HTML Button */}
          <img
            src="/images/Badges/htmlcity.png"
            alt="HTML Badge"
            className="button-image"
            onClick={() => {
              // Handle the click event for HTML
            }}
          /><br></br>
          
          <h1><span className="glow-blue">CSS City</span></h1>
          {/* CSS Button */}
          <img
            src="/images/Badges/csscity.png"
            alt="CSS Badge"
            className="button-image"
            onClick={() => {
              // Handle the click event for CSS
            }}
          /><br></br>
          
          <h1><span className="glow-yellow">JavaScript City</span></h1>
          {/* JavaScript Button */}
          <img
            src="/images/Badges/JScity.png"
            alt="JavaScript Badge"
            className="button-image"
            onClick={() => {
              // Handle the click event for JavaScript
            }}
          />
        </div>
      </section>
      <section className="mb-4 p-4 bg-black bg-opacity-80 rounded-lg border border-cyber-blue right-section flex-1">
        <h2>Badges</h2>
        <div className="badge-images">
          <p>HTML</p>
          <div className="badge-group flex"> {/* Add the 'flex' class to create a horizontal row */}
            <img src="/images/Badges/htmlnovice.png" alt="HTML Badge" />
            <img src="/images/Badges/htmlskilled.png" alt="HTML Badge" />
            <img src="/images/Badges/htmlmaster.png" alt="HTML Badge" />
          </div>
        </div>
        <div className="badge-images">
          <p>CSS</p>
          <div className="badge-group flex"> {/* Add the 'flex' class to create a horizontal row */}
            <img src="/images/Badges/cssnovice.png" alt="CSS Badge" />
            <img src="/images/Badges/cssskilled.png" alt="CSS Badge" />
            <img src="/images/Badges/cssmaster.png" alt="CSS Badge" />
          </div>
        </div>
        <div className="badge-images">
          <p>JavaScript</p>
          <div className="badge-group flex"> {/* Add the 'flex' class to create a horizontal row */}
            <img src="/images/Badges/JSnovice.png" alt="JavaScript Badge" />
            <img src="/images/Badges/JSskilled.png" alt="JavaScript Badge" />
            <img src="/images/Badges/JSmaster.png" alt="JavaScript Badge" />
          </div>
          </div>
          <div className="badge-images">
          <p>Achievement</p>
          <div className="badge-group flex"> {/* Add the 'flex' class to create a horizontal row */}
            <img src="/images/Badges/Achievement1.png" alt="Achievement Badge" />
            <img src="/images/Badges/Achievement2.png" alt="Achievement Badge" />
            <img src="/images/Badges/Achievement3.png" alt="Achievement Badge" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
