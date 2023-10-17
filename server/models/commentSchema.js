const { Schema, Types } = require('mongoose');

const commentSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
    default: new Types.ObjectId(),
  },
  content: {
    type: String,
    required: true,
  },
  commenter: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = commentSchema;
