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

  type Res {
    statusCode: Int!
  }

  type Query {
    me: User
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
    lessonValidate(lessonData: lessonInput!): Res
  }

`;

module.exports = typeDefs;