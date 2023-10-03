const {Schema, model} = require("mongoose")
const bcrypt = require("bcrypt")

const profileSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  achievements: [achievements],
})

const Profile = model("Profile", profileSchema)

module.exports = Profile
