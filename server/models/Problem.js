const { Schema, model, Types } = require('mongoose')

const answerSchema = require('./answerSchema')

const problemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lessonID: {
        type: Types.ObjectId,
        required: true,
    },
    problemType: {
        type: String,
        required: true,
    },
    question: {
        type: String,
        required: true
    },
    answers: [answerSchema],
    correctAnswer: {
        type: String,
        required: true
    },
})

const Problem = model("problem", problemSchema)

module.exports = Problem;
