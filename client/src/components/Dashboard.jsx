import React from 'react';
import Footer from './Footer';

const Dashboard = () => {
  const htmlRoadmapData = [
    { id: 1, title: 'Introduction to HTML' },
    { id: 2, title: 'HTML Elements and Tags' },
    { id: 3, title: 'HTML Forms' },
    { id: 4, title: 'HTML Tables' },
    { id: 5, title: 'HTML Lists' },
    // Add more HTML lessons as needed, then move to CSS and JS
  ];

  const dashboardStyle = {
    background: 'url("/images/background.png")', // Update with the actual image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div style={dashboardStyle}>

      {/* Main */}
      <main className="bg-opacity-80 p-4">
        {/* Course selection section */}
        <section className="mb-4">
          <h2 className="text-xl font-bold mb-2">Select a Course</h2>
          {/* Collection of units with some number of lesson icons */}
          {/* Lesson icon is an href for the lessonID */}
          {/* ... (course options here) */}
        </section>

        {/* "Stepping Stones" roadmap section for HTML>css>js */}
        <section className="mb-4 p-4 bg-black bg-opacity-80 rounded-lg border border-cyber-blue">
          <h2 className="text-xl font-bold mb-2 text-white">HTML Roadmap</h2>
          <ul className="flex flex-wrap justify-center space-x-4">
            {htmlRoadmapData.map((item) => (
              <li key={item.id}>
                <button className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded">
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </section>

        {/* Progress tracking */}
        <section className="mb-4 p-4 bg-black bg-opacity-80 rounded-lg border border-cyber-blue">
          <h2 className="text-xl font-bold mb-2 text-white">Your Progress</h2>
          {/* ... (progress tracking content) */}
        </section>

        {/* Course content section */}
        <section className="p-4 bg-black bg-opacity-80 rounded-lg border border-cyber-blue">
          <h2 className="text-xl font-bold mb-2 text-white">Course Content</h2>
          {/* ... (lessons, exercises, etc.) */}
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
