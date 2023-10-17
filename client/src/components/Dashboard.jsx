import React from "react";
import Leaderboard from "./Leaderboard";

const Dashboard = () => {
  // mock progress for now
  const progressData = {
    totalLessons: 50,
    completedLessons: 11,
  };
  // Calculate the progress percentage
  const progressPercentage =
    (progressData.completedLessons / progressData.totalLessons) * 100;

  return (
    <div className="dashboard-container flex">
      {/* left section */}
      <section className="mb-4 p-4 bg-black bg-opacity-80 rounded-lg border border-cyber-blue left-section flex-1">
        <section className="w-full min-w-max bg-black rounded-lg border-solid border-2 border-cyber-yellow">
          <h2 className="glow-white">Progress Tracker</h2>
          <div className="progress-bar ">
            <div
              className="progress"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <p>
            {progressData.completedLessons} / {progressData.totalLessons}{" "}
            lessons completed
          </p>
        </section>
        <br></br>
        <Leaderboard />

        {/* middle section */}
      </section>
      <section className="mb-4 p-4 bg-black bg-opacity-80 rounded-lg border border-cyber-blue middle-section flex-1  justify-center">
        <br></br>
        <h1>
          <span className="glow-red flex justify-center">
            <a href="/html">HTML City</a>
          </span>
        </h1>
        <div className="lesson-buttons flex justify-center">
          {/* HTML Button */}
          <a href="/html">
            <img
              src="/images/Badges/htmlcity.png"
              alt="HTML Badge"
              className="button-image"
            />
          </a>
          </div>
          <br></br>

          <h1>
            <span className="glow-blue flex justify-center">
              <a href="/css">CSS City</a>
            </span>
          </h1>
          <div className="lesson-buttons flex justify-center">
          {/* CSS Button */}
          <a href="/css">
            <img
              src="/images/Badges/csscity.png"
              alt="CSS Badge"
              className="button-image"
            />
          </a>
          </div>
          <br></br>

          <h1>
            <span className="glow-yellow flex justify-center">
              <a href="/javascript">JavaScript City</a>
            </span>
          </h1>
          <div className="lesson-buttons flex justify-center">
          {/* JavaScript Button */}
          <a href="/javascript">
            <img
              src="/images/Badges/JScity.png"
              alt="JavaScript Badge"
              className="button-image"
            />
          </a>
        </div>
      </section>

      {/* right section */}
      <section className="mb-4 p-4 bg-black bg-opacity-80 rounded-lg border border-cyber-blue right-section flex-1">
        <div class=" mb-2 rounded-lg flex justify-center">
          <h2 class="text-white m-1">HTML Badges</h2>
        </div>
        <div className="badge-images flex justify-center">
          <div className="badge-group flex">
            <img src="/images/Badges/htmlnovice.png" alt="HTML Badge" />
            <img src="/images/Badges/htmlskilled.png" alt="HTML Badge" />
            <img src="/images/Badges/htmlmaster.png" alt="HTML Badge" />
          </div>
        </div>
        <div class=" mb-2 rounded-lg flex justify-center">
          <h2 class="text-white m-1">CSS Badges</h2>
        </div>
        <div className="badge-images flex justify-center">
          <div className="badge-group flex">
            <img src="/images/Badges/cssnovice.png" alt="CSS Badge" />
            <img src="/images/Badges/cssskilled.png" alt="CSS Badge" />
            <img src="/images/Badges/cssmaster.png" alt="CSS Badge" />
          </div>
        </div>
        <div class=" mb-2 rounded-lg flex justify-center">
          <h2 class="text-white m-1">JavaScript Badges</h2>
        </div>
        <div className="badge-images flex justify-center">
          <div className="badge-group flex">
            <img src="/images/Badges/JSnovice.png" alt="JavaScript Badge" />
            <img src="/images/Badges/JSskilled.png" alt="JavaScript Badge" />
            <img src="/images/Badges/JSmaster.png" alt="JavaScript Badge" />
          </div>
        </div>
        <div class=" mb-2 rounded-lg flex justify-center">
          <h2 class="text-white m-1">Achievement Badges</h2>
        </div>
        <div className="badge-images flex justify-center">
          <div className="badge-group flex">
            <img
              src="/images/Badges/Achievement1.png"
              alt="Achievement Badge"
            />
            <img
              src="/images/Badges/Achievement2.png"
              alt="Achievement Badge"
            />
            <img
              src="/images/Badges/Achievement3.png"
              alt="Achievement Badge"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
