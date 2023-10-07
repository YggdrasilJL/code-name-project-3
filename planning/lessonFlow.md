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


