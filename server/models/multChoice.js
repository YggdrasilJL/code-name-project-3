const { Schema, model } = require("mongoose");

const answerSchema = require ('./answerSchema')

const multChoiceSchema = new Schema({
  question: {
    type: String,

  },
  answers: [answerSchema],
  correctAnswer: {
    Type: String,

  },
})

const MultChoice = model("multChoice", multChoiceSchema)

module.exports = MultChoice
