const mongoose = require('mongoose')
const { Schema, model } = mongoose
require('mongoose-regexp')(mongoose);

const answerSchema = require ('./answerSchema')

const fillTheBlankSchema = new Schema({
  question: {
    type: String,

  },
  answer: [answerSchema],
  correctAnswer: {
    Type: RegExp,

  },
})

const FillTheBlank = model("fillTheBlank", fillTheBlankSchema)

module.exports = FillTheBlank
