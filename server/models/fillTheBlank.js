const {Schema, model} = require("mongoose")

const fillTheBlankSchema = new Schema({
  problem: {
    question: {
      type: String,
      required: true,
    },
    givenAnswer: {
      type: String,
      required: false,
    },
  },
})

const fillTheBlank = model("fillTheBlank", fillTheBlankSchema)

module.exports = fillTheBlank
