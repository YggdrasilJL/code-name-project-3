import React, { useState } from "react";
import ParticleEffect from "./ParticleEffect";
import problemData from "../../../server/utils/seeds/problemData.json";

const Html = () => {
  const HtmlLessons = [
    { id: 1, title: "HTML.prob.1" },
    { id: 2, title: "HTML.prob.2" },
    { id: 3, title: "HTML.prob.3" },
    { id: 4, title: "HTML.prob.4" },
    { id: 5, title: "HTML.prob.5" },
    { id: 6, title: "HTML.prob.6" },
    { id: 7, title: "HTML.prob.7" },
    { id: 8, title: "HTML.prob.8" },
    { id: 9, title: "HTML.prob.9" },
    { id: 10, title: "HTML.prob.10" },
  ];

 // lesson data
  const [lessonData, setLessonData] = useState(problemData);

// hold the user's selected answer
  const [selectedLesson, setSelectedLesson] = useState(null);

// btn click and set the selected lesson
  const [selectedAnswer, setSelectedAnswer] = useState("");
// BTN title is used to find lesson data here
  const handleButtonClick = (lessonTitle) => {
    const selected = lessonData.find((lesson) => lesson.name === lessonTitle);
    setSelectedLesson(selected);
  };

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };

  return (
    <div style={htmlStyle}>
      <ParticleEffect />

      <section className="mb-4 p-4 bg-black bg-opacity-80 rounded-lg border border-cyber-blue">
        <h2 className="text-xl font-bold mb-2 text-white">HTML Lessons</h2>
        <ul className="flex flex-wrap justify-center space-x-4">
          {HtmlLessons.map((item) => (
            <li key={item.id}>
              <button
                className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
                onClick={() => handleButtonClick(item.title)}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </section>

      {selectedLesson && (
        <div className="text-white">
          <h3>{selectedLesson.lessonName}</h3>
          <p>{selectedLesson.question}</p>

          {selectedLesson.problemType === "Multiple Choice" &&
            selectedLesson.answers.map((answer) => (
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

export default Html;
