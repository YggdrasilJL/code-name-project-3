const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Lesson {
    _id: ID!
    lessonType: String!
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

  input answerInput {
    userID: String
    lessonID: String!
    body: String
  }

  type Query {
    me: User
    lesson(id: ID!): Lesson
  }

  input userInput {
    username: String!
    email: String!
    password: String!
  }

  input lessonInput {
    userID: ID!
    lessonID: ID!
    lessonAnswerData: String!
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(userData: userInput!): Auth
    lessonValidate(answerData: answerInput!): Answer
  }

`;

module.exports = typeDefs;