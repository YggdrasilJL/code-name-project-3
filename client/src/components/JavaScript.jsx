import React, { useState, useEffect } from "react";
import problemData from "../../../server/utils/seeds/problemData.json";
import answerData from "../../../server/utils/seeds/answerData.json";

const JavaScript = () => {
  const JavaScriptLessons = [];

// Number of lessons per category
const lessonsPerCategory = 10;
const categories = ["Variables", "DataTypes", "Operators"];

// Generate the lesson objects
for (const category of categories) {
  for (let i = 1; i <= lessonsPerCategory; i++) {
    const title = `${category}.prob.${i}`;
    JavaScriptLessons.push({ id: JavaScriptLessons.length + 1, title });
  }
}


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
