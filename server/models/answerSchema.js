const { Schema, Types } = require("mongoose")

const answerSchema = new Schema({
    answerID: {
        type: Types.ObjectId,
        required: true,
        default: new Types.ObjectId(),
    },
    userID: {
        type: String
    },
    problemID: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    body: {
        type: String
    },
    isValidated: {
        type: Boolean,
        required: true,
        default: false
    }
});

module.exports = answerSchema