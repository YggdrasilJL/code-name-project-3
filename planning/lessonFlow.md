# lesson flow

## dashboard
    click lesson icon 
    => get lesson id from lesson icon data
    ==> send user to /lessons/${lessonID}
    ===> req lesson data from server with lessonID
    lesson.lessonType
    different lesson templates returned based on lesson.lessonType??
## loading screen
    receive lesson data and populate
## lesson page
    user submits answer
    => send answer data to server to validate
    => returns isValidated
    => display if correct + explaining why or why not correct???
    add to score??? next problem???? tbd

## lesson seeds?

    {
  "problems": [
    {
      "question": "Make the console output 'Fluffy'",
      "givenAnswer": "var shelter = {\ndogs: ['Mackie', 'Bernice', 'Cookie Monster', 'Spot'],\n cats: ['Astrid', 'Lulu', 'Fluffy', 'Mouser']};\nvar chosenPet = function () {\n// code here};\nconsole.log(chosenPet());`"
    }
  ]
}

{
  "problems": [
    {
      "question": "Which of the following lines of code will put 'Canis Major' at the beginning of the array constellations?",
      "options": [
        {
          "answerOne": "constellations.insert('Canis Major');",
          "answerTwo": "constellations.unshift('Canis Major');",
          "answerThree": "constellations.addToBeginning('Canis Major');",
          "answerFour": "constellations.pop('Canis Major');",
          "correctAnswer": "constellations.unshift('Canis Major');"
        }
      ]
    }
  ]
}

## issue

"Cannot query field \"Res\" on type \"Res\"."

## Resolution

reformat models, resolvers and typedefs?

### model structure


    userSchema TBD
        username
        email
        password
        avatar?
        xp?
        achievements

    // hash the password??

    const lessonSchema = new Schema({
    lessonType: {
        type: String,
        required:true,
    },
    question: {
        type: String,
        required: true
    },
    answers: [answerSchema],
    correctAnswer: {
        type: RegExp,
        required: true
    },
    })

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
        isValidated: {
            type: Boolean,
            required: true,
            default: false
        }
    })


## lesson data from a few commits ago

using userID and lessonID for filename,
        data should be the string output of the lesson/codeMirror
        will probably also need a token
        lessonData = {
          userID: User._id,
          lessonID: lesson._id,
          lessonAnswerData: `
          // make the console output 'Fluffy'
            var shelter = {
              dogs: ["Mackie", "Bernice", "Cookie Monster", "Spot"],
              cats: ["Astrid", "Lulu", "Fluffy", "Mouser"]
            };
            var chosenPet = function () {
              // code here
            };
            console.log(chosenPet());`
        }

