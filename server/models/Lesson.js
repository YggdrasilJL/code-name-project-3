const { Schema, model } = require('mongoose');

const lessonSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  iconUrl: {
    type: String,
    required:true,
  },
  problems: [{ type: Schema.ObjectId, ref: 'problem' }],
  unit: {
    type: String,
    required: true,
  }
})

const Lesson = model("lesson", lessonSchema)

module.exports = Lesson;
