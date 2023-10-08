const db = require("../../config/connection")
const seedDB = require("./seedDB")
const { User, Lesson, Problem } = require("../../models")

const userData = require("./userData.json")
const lessonData = require("./lessonData.json")
const problemData = require("./problemData.json")

const { lessonNameMatch } = require("../seedNameMatch")

db.once("open", async () => {
  await seedDB("users");
  await seedDB("lessons");
  await seedDB("problems");

  await User.collection.insertMany(userData);
  await Lesson.collection.insertMany(lessonData);

  const problemSeeds = lessonNameMatch(lessonData, problemData);

  await Problem.collection.insertMany(problemSeeds);

  const problemLessonIDs = problemSeeds.map((problem) => {
    return {
      lessonID: problem.lessonID,
      problemID: problem._id
    }
  });

  for (let i = 0; i < problemLessonIDs.length; i++) {
    let { lessonID, problemID } = problemLessonIDs[i]
    await Lesson.updateOne(
      { _id: lessonID },
      { $push: { problems: problemID } }
    )
  };

  console.table(userData);
  console.table(lessonData);
  console.table(problemSeeds);
  console.log("problems seeded!");
  process.exit(0);
})
