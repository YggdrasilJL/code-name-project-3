const { User } = require('../models');
const { userAnswerFile } = require('../utils/fsUtils')
const answerTester = require('../utils/answerTester')


const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    }
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user with this email found!')
      };

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    },
    addUser: async (parent, { userData }) => {
      const { username, email, password } = userData;
      const user = await User.create({
        username: username,
        email: email,
        password: password
      });

      if (!user) {
        return res.status(400).json({ message: 'Something is wrong!' });
      };
      const token = signToken(user)
      return { token, user }
    },
    // lesson routes?
    lessonValidate: async (parent, { lessonData }) => {
      /*
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
      */

      const { userID, lessonID, lessonAnswerData } = lessonData
      const path = await userAnswerFile(userID, lessonID, lessonAnswerData)

      answerTester(path, (err) => {
        if (err) {
          return new GraphQLError(err, {
            extensions: {
              code: 'VALIDATION_FAILED'
            }
          });
        } else {
          return 200
        }

      })
    }

  },
}


module.exports = resolvers;
