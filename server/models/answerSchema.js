const { Schema, Types } = require("mongoose")

const answerSchema = new Schema({
    answerID: {
        type: Types.ObjectId,
        default: new Types.ObjectId(),
    },
    lessonID: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    }
})

module.exports = answerSchema