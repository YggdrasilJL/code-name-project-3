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

export const GOOGLE_LOGIN = gql`
  mutation googleLogin($credential: String!) {
    googleLogin(credential: $credential) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($userData: userInput!) {
    addUser(userData: $userData) {
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

export const ADD_COMMENT = gql`
  mutation addComment($commentData: CommentInput!) {
    addComment(commentData: $commentData) {
      user {
        _id
        username
        comments {
          _id
          content
          commenter
          createdAt
        }
      }
    }
  }
`