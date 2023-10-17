const db = require("../../config/connection")
const seedDB = require("./seedDB")
const { User, Lesson, Problem } = require("../../models")

const userData = require("./userData.json")
const lessonData = require("./lessonData.json")
const problemData = require("./problemData.json")
const answerData = require("./answerData.json")

const { lessonNameMatch, problemNameMatch } = require("../seedNameMatch")

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
      { $addToSet: { problems: problemID } },
      { new: true }
    )
  };

  const answerSeeds = problemNameMatch(problemSeeds, answerData);

  for (let i = 0; i < answerSeeds.length; i++) {
    const { problemID, body } = answerSeeds[i];
    await Problem.updateOne(
      { _id: problemID },
      { $addToSet: { answers: { body } } },
    )
  };

  console.table(userData);
  console.table(lessonData);
  console.table(problemSeeds);
  console.table(answerSeeds);
  console.log("problems seeded!");
  process.exit(0);
})
