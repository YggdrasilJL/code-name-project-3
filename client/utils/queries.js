import { gql } from '@apollo/client';


export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        createdAt
      }
    }
  }
`;


export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      lessons {
        _id
      }
    }
  }
`;


export const GET_LESSON = gql`
  query lesson($id: ID!) {
    lesson(id: $id) {
      _id
      name
      iconUrl
      unit
      problems {
        _id
      }
    }
  }
`

export const GET_PROBLEM = gql`
  query problem($id: ID!) {
    problem(id: $id) {
      _id
      problemType
      question
      answers {
        body
      }
    }
  }
`
export const QUERY_MESSAGES = gql`
  query getMessages {
    messages {
      _id
      messageText
      messageAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_MESSAGE = gql`
  query getSingleMessage($MessageId: ID!) {
    message(messageId: $MessageId) {
      _id
      messageText
      messageAuthor
      createdAt
    }
  }
`;