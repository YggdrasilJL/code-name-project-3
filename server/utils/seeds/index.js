const db = require("../../config/connection")
const seedDB = require("./seedDB")
const {User, Lesson } = require("../../models")

const userData = require("./userData.json")
const lessonData = require("./lessonData.json")


db.once("open", async () => {
  await seedDB("users")
  await seedDB("lessons")

  await User.insertMany(userData)
  await Lesson.insertMany(lessonData)

  console.log("problems seeded!")
  process.exit(0)
})
