const typeDefs = `

  # Object types

  type User {
    _id: ID
    username: String!
    email: String!
    avatar: String
    messages: [Message]
    comments: [Comment]
  }

  type Message {
    _id: ID!
    messageAuthor: String!
    messageText: String!
    createdAt: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Lesson {
    _id: ID!
    name: String!
    iconUrl: String!
    problems: [Problem]!
    unit: String!
  }

  type Problem {
    _id: ID!
    name: String!
    lessonID: ID!
    problemType: String!
    question: String!
    answers: [Answer]
    correctAnswer: String!
  }

  type Answer {
    answerID: ID!
    userID: String
    lessonID: String!
    body: String
    isValidated: Boolean!
  }

 # Input types

  input answerInput {
    userID: String
    lessonID: String!
    body: String
  }

  input userInput {
    username: String!
    email: String!
    password: String!
  }

  input messageInput {
    messageText: String!
    messageAuthor: String!
  }

  input CommentInput {
    content: String!
    userID: ID!
  }

  input lessonInput {
    lessonID: ID!
    lessonAnswerData: String!
  }

  # Comments

  type Comment {
    _id: ID!
    content: String!
    commenter: String!
    createdAt: String!
  }

  # Queries & Mutations

  type Query {
    me: User
    user(username: String!): User
    lesson(id: ID!): Lesson
    problem(id: ID!): Problem
    commentsByUser(userId: ID!): [Comment]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    googleLogin(credential: String!): Auth
    addUser(userData: userInput!): Auth
    problemValidate(answerData: answerInput!): Answer
    addMessage(messageData: messageInput): User
    addComment(commentData: CommentInput!): User
  }

`;

module.exports = typeDefs;
