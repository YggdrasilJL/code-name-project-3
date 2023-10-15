const { Schema, Types } = require('mongoose')

const userMessagesSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        required: true,
        default: new Types.ObjectId()
    },
    username: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = userMessagesSchema