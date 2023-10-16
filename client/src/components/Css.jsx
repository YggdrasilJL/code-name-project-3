import React, { useState } from "react";
import ParticleEffect from "./ParticleEffect";
import problemData from "../../../server/utils/seeds/problemData.json";

const Css = () => {
  const CssLessons = [
    { id: 1, title: "CSS.prob.1" },
    { id: 2, title: "CSS.prob.2" },
    { id: 3, title: "CSS.prob.3" },
    { id: 4, title: "CSS.prob.4" },
    { id: 5, title: "CSS.prob.5" },
    { id: 6, title: "CSS.prob.6" },
    { id: 7, title: "CSS.prob.7" },
    { id: 8, title: "CSS.prob.8" },
    { id: 9, title: "CSS.prob.9" },
    { id: 10, title: "CSS.prob.10" },
  ];

  // lesson data
  const [lessonData, setLessonData] = useState(problemData);

  // hold the user's selected answer
  const [selectedLesson, setSelectedLesson] = useState(null);

  // btn click and set the selected lesson
  const [selectedAnswer, setSelectedAnswer] = useState("");

  // BTN title is used to find lesson data here
  const handleButtonClick = (lessonTitle) => {
    const selected = lessonData.find((lesson) => lesson.problemName === lessonTitle);
    setSelectedLesson(selected);
  };

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };

  return (
    <div>
      {/* <ParticleEffect /> */}

      <section className="mb-4 p-4 bg-black bg-opacity-80 rounded-lg border border-cyber-blue">
        <h2 className="text-xl font-bold mb-2 text-white">CSS Lessons</h2>
        <ul className="flex flex-wrap justify-center space-x-4 z-50">
      <section className="mb-4 p-4 bg-black bg-opacity-80 rounded-lg border border-cyber-blue">
        <h2 className="text-xl font-bold mb-2 text-white text-center">CSS Lessons</h2>
        <ul className="flex flex-wrap justify-center space-x-4">
          {CssLessons.map((item) => (
            <li key={item.id}>
              <button
                className="bg-gray-300 hover:bg-blue-400 px-4 py-2 rounded"
                onClick={() => handleButtonClick(item.title)}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
        <p style={{ color: "#FF00F2", textAlign: "center" }}>More Coming Soon</p>
      </section>

      {selectedLesson && (
        <div className="text-white">
          <h3>{selectedLesson.problemName}</h3>
          <p>{selectedLesson.body[0].body}</p>

          {selectedLesson.problemType === "Multiple Choice" &&
            selectedLesson.body.map((answer) => (
              <div key={answer._id}>
                <label>
                  <input
                    type="radio"
                    name="answers"
                    value={answer.body}
                    onChange={() => handleAnswerSelection(answer.body)}
                  />
                  {answer.body}
                </label>
              </div>
            ))}
        </div>
      )}

      {selectedAnswer && (
        <div className="text-white">
          <p>Your answer: {selectedAnswer}</p>
        </div>
      )}
    </div>
  );
};

export default Css;
