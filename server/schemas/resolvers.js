const { User, Lesson, Problem } = require('../models');
const { signToken, decodeToken, AuthenticationError } = require('../utils/Auth');

const resolvers = {
  Query: {
    me: async (parent, args, { req }) => {
      if (context.user) {
        return await User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    user: async (_, { username }) => {
      return await User.findOne({ username: username });
    },
    lesson: async (_, args) => {
      return await Lesson.findOne({ _id: args.id });
    },
    problem: async (_, args) => {
      return await Problem.findOne({ _id: args.id });
    },
    commentsByUser: async (_, { userId }) => {
      return await Comment.find({ user: userId });
    },
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user with this email found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    },
    googleLogin: async (_, { credential }) => {
      try {
        const data = decodeToken(credential);

        console.log(data);

        if (data) {
          const user = await User.upsertGoogleUser(data);

          if (user) {
            return {
              token: signToken(user),
              user,
            };
          }
        }
        if (info) {
          console.log(info);
          switch (info.code) {
            case 'ETIMEDOUT':
              return new Error('Failed to reach Google: Try Again');
            default:
              return new Error('something went wrong');
          }
        }
        return Error('server error');
      } catch (error) {
        return error;
      }
    },
    addUser: async (parent, { userData }) => {
      const { username, email, password } = userData;
      const user = await User.create({
        username: username,
        email: email,
        password: password,
      });

      if (!user) {
        return res.status(400).json({ message: 'Something is wrong!' });
      }
      const token = signToken(user);
      return { token, user };
    },
    // lesson routes?
    problemValidate: async (_, { answerData }, context) => {
      let { lessonID, body } = answerData;
      //const user = await User.findOne({ _id: context.user._id })
      const lesson = await Lesson.findOne({ _id: lessonID });
      const validator = new RegExp('test*'); //lesson.correctAnswer
      isValidated = validator.test(body);

      /*if (isValidated) {
        user.xp += lesson.xpValue
      }*/

      return { isValidated };
    },
    addMessage: async (_, { messageText }, context) => {
      // need to send user
    },
    addComment: async (_, { commentInput }, context) => {
      if (!context.user) {
        throw new AuthenticationError(
          'You need to be logged in to create a comment!'
        );
      }
      //userID is the user being commented on
      //commenter is the user commenting
      //when pulling a profile, comments display with username
      //on front end, when a user clicks on the username
      //an onclickhandler will be called which retrieves the
      //userinfo using the username and populates the profile
      
      const { content, userID } = commentInput;
      const commenter = context.user.username

      try {
        const user = await User.updateOne(
          { _id: userID },
          {
            $addToSet: {
              comments: {
                content,
                commenter: commenter
              }
            }
          }
        );
        return user
      } catch (error) {
        console.log(error);
      }
    },
  },
};


module.exports = resolvers;
