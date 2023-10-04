const {Schema, model} = require("mongoose")

const challengeSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  options: {
    answerOne: {
      type: String,
      required: true,
    },
    answerTwo: {
      type: String,
      required: true,
    },
    answerThree: {
      type: String,
      required: true,
    },
    answerFour: {
      type: String,
      required: true,
    },
  },
})

const Challenge = model("Challenge", challengeSchema)

module.exports = Challenge
