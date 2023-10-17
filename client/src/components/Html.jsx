import React, { useState } from 'react';
import problemData from '../../../server/utils/seeds/problemData.json';
import answerData from '../../../server/utils/seeds/answerData.json';

const Html = () => {
  const HtmlLessons = [
    { id: 1, title: 'HTML.prob.1' },
    { id: 2, title: 'HTML.prob.2' },
    { id: 3, title: 'HTML.prob.3' },
    { id: 4, title: 'HTML.prob.4' },
    { id: 5, title: 'HTML.prob.5' },
    { id: 6, title: 'HTML.prob.6' },
    { id: 7, title: 'HTML.prob.7' },
    { id: 8, title: 'HTML.prob.8' },
    { id: 9, title: 'HTML.prob.9' },
    { id: 10, title: 'HTML.prob.10' },
  ];

  // lesson data
  const [lessonData, setLessonData] = useState(problemData);

  // hold the user's selected lesson
  const [selectedLesson, setSelectedLesson] = useState(null);

  // hold the user's selected answer
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleButtonClick = (lessonTitle) => {
    const selected = lessonData.find((lesson) => lesson.name === lessonTitle);
    setSelectedLesson(selected);
    setSelectedAnswer(''); // Clear selected answer when a new lesson is selected
  };

  const handleAnswerSelection = (answer) => {
    if (selectedAnswer === answer) {
      setSelectedAnswer('');
    } else {
      setSelectedAnswer(answer);
    }
  };

  // Helper function to retrieve answers based on the problem name
  const getAnswersForProblem = (problemName) => {
    const problemAnswers = answerData.find(
      (answer) => answer.problemName === problemName
    );
    return problemAnswers ? problemAnswers.body : [];
  };

  return (
    <div>
      <section className="mb-4 p-4 bg-black bg-opacity-80 rounded-lg border border-cyber-blue">
        <h2 className="text-xl font-bold mb-2 text-white">HTML Lessons</h2>
        <ul className="flex flex-wrap justify-center space-x-4">
          {HtmlLessons.map((item) => (
            <li key={item.id}>
              <button
                className="bg-gray-300 hover:bg-red-400 px-4 py-2 rounded"
                onClick={() => handleButtonClick(item.title)}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
        <p style={{ color: '#FF00F2' }} className="text-center mt-4">
          More Coming Soon
        </p>
      </section>

      {selectedLesson && (
        <section className="mb-4 p-4 bg-black bg-opacity-80 rounded-lg border border-cyber-blue">
          <div className="text-white">
            <h3>{selectedLesson.lessonName}</h3>
            <p>{selectedLesson.question}</p>
          </div>
        </section>
      )}

      {selectedLesson && (
        <section className="mb-4 p-4 bg-black bg-opacity-80 rounded-lg border border-cyber-blue">
          <div className="text-white">
            <h3>Answers</h3>
            <div className="flex gap-3">
              {getAnswersForProblem(selectedLesson.name).map((answer) => (
                <div key={answer._id}>
                  <button
                    onClick={() => handleAnswerSelection(answer.body)}
                    className={`bg-gray-300 hover:bg-red-400 px-4 py-2 rounded ${
                      selectedAnswer === answer.body ? 'bg-red-400' : ''
                    }`}
                  >
                    {answer.body}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {selectedAnswer && (
        <section className="mb-4 p-4 bg-black bg-opacity-80 rounded-lg border border-cyber-blue">
          <div className="text-white">
            <h3>Your answer</h3>
            <p>{selectedAnswer}</p>
          </div>
        </section>
      )}
      <div className="w-fit text-white mt-12">
        <a
          href=""
          className="border border-cyber-yellow p-5 rounded-md rounded-br-3xl bg-cyber-black avoid-particle"
        >
          SUBMIT_
        </a>
      </div>
    </div>
  );
};

export default Html;
