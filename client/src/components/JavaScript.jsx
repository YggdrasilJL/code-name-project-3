import React, { useState, useEffect } from "react";
import problemData from "../../../server/utils/seeds/problemData.json";
import answerData from "../../../server/utils/seeds/answerData.json";

const JavaScript = () => {
  const JavaScriptLessons = [
    { id: 1, title: "Variables.prob.1" },
    { id: 2, title: "Variables.prob.2" },
    { id: 3, title: "Variables.prob.3" },
    { id: 4, title: "Variables.prob.4" },
    { id: 5, title: "Variables.prob.5" },
    { id: 6, title: "Variables.prob.6" },
    { id: 7, title: "Variables.prob.7" },
    { id: 8, title: "Variables.prob.8" },
    { id: 9, title: "Variables.prob.9" },
    { id: 10, title: "Variables.prob.10" },
    { id: 11, title: "DataTypes.prob.1" },
    { id: 12, title: "DataTypes.prob.2" },
    { id: 13, title: "DataTypes.prob.3" },
    { id: 14, title: "DataTypes.prob.4" },
    { id: 15, title: "DataTypes.prob.5" },
    { id: 16, title: "DataTypes.prob.6" },
    { id: 17, title: "DataTypes.prob.7" },
    { id: 18, title: "DataTypes.prob.8" },
    { id: 19, title: "DataTypes.prob.9" },
    { id: 20, title: "DataTypes.prob.10" },
    { id: 21, title: "Operators.prob.1" },
    { id: 22, title: "Operators.prob.2" },
    { id: 23, title: "Operators.prob.3" },
    { id: 24, title: "Operators.prob.4" },
    { id: 25, title: "Operators.prob.5" },
    { id: 26, title: "Operators.prob.6" },
    { id: 27, title: "Operators.prob.7" },
    { id: 28, title: "Operators.prob.8" },
    { id: 29, title: "Operators.prob.9" },
    { id: 30, title: "Operators.prob.10" },
  ];

  // lesson data
  const [lessonData, setLessonData] = useState(problemData);

  // hold the selected lesson
  const [selectedLesson, setSelectedLesson] = useState(null);

  // hold the user's selected answer
  const [selectedAnswer, setSelectedAnswer] = useState("");

  // btn click and set the selected lesson
  const handleButtonClick = (lessonTitle) => {
    // BTN title is used to find lesson data here
    const selected = lessonData.find((lesson) => lesson.name === lessonTitle);
    setSelectedLesson(selected);
  };

  // handle user answer selection
  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };

  return (
    <div>
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <section className="mb-4 p-4 bg-black bg-opacity-80 rounded-lg border border-cyber-blue">
        <h2 className="text-xl font-bold mb-2 text-white">JavaScript Lessons</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {JavaScriptLessons.map((item) => (
            <li key={item.id} style={{ display: "inline-block", margin: "5px" }}>
              <button
                className="bg-gray-300 hover:bg-cyber-yellow px-4 py-2 rounded"
                onClick={() => handleButtonClick(item.title)}
              >
                {item.title}
              </button>
            </li>
          ))}
          <li style={{ color: "#FF00F2" }}>More Coming Soon</li>
        </ul>
      </section>

      {selectedLesson && (
        <div className="text-white">
          <h3>{selectedLesson.lessonName}</h3>
          <p>{selectedLesson.question}</p>

          {/* answer options */}
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

export default JavaScript;
