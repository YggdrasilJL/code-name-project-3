const { User, Lesson } = require('../models');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    lesson: async (_, args, ) => {
      return Lesson.findOne({ _id: args.id });
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
    lessonValidate: async (_, { answerData }) => {
      let { userID, lessonID, body } = answerData;
      //const user = await User.findOne({ _id: userID })
      const lesson = await Lesson.findOne({ _id: lessonID })
      const validator = new RegExp('test*') //lesson.correctAnswer
      isValidated = validator.test(body)


      /*if (isValidated) {
        user.xp += lesson.xpValue
      }*/

      return { isValidated }
    },
  },
}


module.exports = resolvers;
