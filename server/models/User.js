const {Schema, model} = require("mongoose")

const userSchema = new Schema({
  users: [
    {
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
      },
      password: {
        type: String,
        required: true,
        minlength: 5,
      },
      avatar: [avatar],
      xp: [xp],
      achievements: [achievements],
    },
  ],
})
//Needs a lot more to be added here.

const User = model("User", userSchema)

module.exports = User
