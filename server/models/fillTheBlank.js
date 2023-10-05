const {Schema, model} = require("mongoose")

const fillTheBlankSchema = new Schema({
  problems: [
    {
      question: {
        type: String,
        required: true,
      },
      givenAnswer: {
        type: String,
        required: false,
      },
      correctAnswer: {
        Type: String,
        required: true,
      },
    },
  ],
})

const FillTheBlank = model("fillTheBlank", fillTheBlankSchema)

module.exports = FillTheBlank
