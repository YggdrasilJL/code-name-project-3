const mongoose = require('mongoose')
const { Schema, model } = mongoose
require('mongoose-regexp')(mongoose);

const answerSchema = require ('./answerSchema')

const lessonSchema = new Schema({
  lessonType: {
    type: String,
    required:true,
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

const Lesson = model("lesson", lessonSchema)

module.exports = Lesson;
