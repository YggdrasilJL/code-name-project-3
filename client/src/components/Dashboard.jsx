import React from 'react';
import Header from './Header';
import Footer from './Footer';

// note - place holders / trying to get a visual / not final 
const Dashboard = () => {
  // not sure how todo this ? center roadmap section ?
  const htmlRoadmapData = [
    { id: 1, title: 'Introduction to HTML' },
    { id: 2, title: 'HTML Elements and Tags' },
    { id: 3, title: 'HTML Forms' },
    { id: 4, title: 'HTML Tables' },
    { id: 5, title: 'HTML Lists' },
    // Add more HTML lessons as needed , then move to CSS and JS 
  ];

  return (
    <div>
      {/*  Header */}
      <Header />

      {/* Main */}
      <main className="bg-white text-black p-4">
        {/* Course selection section */}
        <section className="mb-4">
          <h2 className="text-xl font-bold mb-2">Select a Course</h2>
          {/* Collection of units with some number of lesson icons */}
          {/* Lesson icon is an href for the lessonID */}
          {/* 
              /lessons/:lessonID => pull problems => use random problem? => validateAnswer,
              useState for correct answers? => show next problem => once all problems done,
              show final score 
          */}
          {/* props = {problemID, question, answers} */}
          {/* Subsection for HTML */}
          <div className="mb-2">
            <h3 className="text-lg font-semibold">HTML</h3>
            {/* HTML course options can go here */}
          </div>
        </section>

        {/* "Stepping Stones" road map looking section for HTML>css>js */}
        <section className="mb-4">
          <h2 className="text-xl font-bold mb-2">HTML Roadmap</h2>
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

        {/* Progress tracking  */}
        <section className="mb-4">
          <h2 className="text-xl font-bold mb-2">Your Progress</h2>
          {/* Progress tracking maybe for each section? */}
        </section>

        {/* Course content section */}
        <section>
          <h2 className="text-xl font-bold mb-2">Course Content</h2>
          {/*  (lessons, exercises, etc.) */}
        </section>
      </main>

      {/* Footer  */}
      <Footer />
    </div>
  );
};

export default Dashboard;
