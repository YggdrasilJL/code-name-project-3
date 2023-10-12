module.exports = {
    lessonNameMatch: (lessons, problems) => {
        return problems.map(problemObj => {
            const lesson = lessons.find(lesson => lesson.name === problemObj.lessonName);
            return {
                name: problemObj.name,
                lessonID: lesson._id.toString(),
                problemType: problemObj.problemType,
                question: problemObj.question,
                correctAnswer: problemObj.correctAnswer
            }
        })
    },
    problemNameMatch: (problems, answers) => {
        return answers.map(answerObj => {
            const problem = problems.find(problem => problem.name === answerObj.problemName);
            return {
                problemID: problem._id.toString(),
                body: answerObj.body
            }
        })
    }
};