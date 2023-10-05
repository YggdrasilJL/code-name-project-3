const {Schema, model} = require("mongoose")

const multChoiceSchema = new Schema({
  problems: [
    {
      question: {
        type: String,
        required: true,
      },
      options: [
        {
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
          correctAnswer: {
            Type: String,
            required: true,
          },
        },
      ],
    },
  ],
})
const MultChoice = model("multChoice", multChoiceSchema)

module.exports = MultChoice
