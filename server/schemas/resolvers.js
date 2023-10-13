const { User, Lesson, Problem } = require('../models');

const resolvers = {
  Query: {
    me: async (_, __, context) => {
      if (context.user) {
        return await User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // leaderboard: async (parent, args, context) => {
      //
    //}
    lesson: async (_, args, ) => {
      return await Lesson.findOne({ _id: args.id });
    },
    problem: async (_, args, ) => {
      return await Problem.findOne({ _id: args.id });
    }
  },
  Mutation: {
    login: async (_, { email, password }) => {
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
    addUser: async (_, { userData }) => {
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
    problemValidate: async (_, { answerData }) => {
      let { userID, problemID, body } = answerData;
      const user = await User.findOne({ _id: userID })
      const problem = await Problem.findOne({ _id: problemID })
      const validator = new RegExp(problem.correctAnswer)
      isValidated = validator.test(body)


      user.xp += problem.xpValue
      await user.save()

      return { isValidated }
    },
  },
}


module.exports = resolvers;
