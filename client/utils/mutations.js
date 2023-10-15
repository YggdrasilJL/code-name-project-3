import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const LESSON_VALIDATE = gql`
  mutation problemValidate($answerData: answerInput!) {
    problemValidate(answerData: $answerData) {
      isValidated     
    }
  }
`
export const ADD_MESSAGE = gql`
  mutation addMessage($messageData: messageInput!) {
    addMessage(messageData: $messageData) {
      _id
      messageText
      messageAuthor
      createdAt
    }
  }
`;