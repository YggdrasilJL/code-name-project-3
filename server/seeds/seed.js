const db = require("../config/connection")
const cleanDB = require("./cleanDB")
const {User, Challenge} = require("../models")

const userData = require("./userData.json")
const htmlChallengeData = require("./htmlChallengeData.json")
const cssChallengeData = require("./cssChallengeData.json")
const jsChallengeData = require("./jsChallengeData.json")

db.once("open", async () => {
  await cleanDB("Tech", "teches")

  await Tech.insertMany(techData)

  console.log("Technologies seeded!")
  process.exit(0)
})
