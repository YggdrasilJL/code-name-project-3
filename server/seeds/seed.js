const db = require("../config/connection")
const seedDB = require("./seedDB")
const {User, FillTheBlank, MultChoice} = require("../models")

const userData = require("./userData.json")
const fillTheBlankData = require("./fillTheBlankData.json")
const multChoiceData = require("./multChoiceData.json")

db.once("open", async () => {
  await seedDB("User", "users")
  await seedDB("FillTheBlank", "fillTheBlanks")
  await seedDB("MultChoice", "multChoices")

  await User.insertMany(userData)
  await FillTheBlank.insertMany(fillTheBlankData)
  await MultChoice.insertMany(multChoiceData)

  console.log("problems seeded!")
  process.exit(0)
})
