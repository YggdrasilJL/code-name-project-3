import { gql } from '@apollo/client'

export const LOGIN_USER = gql`

    mutation loginUser($email: String!, $password: String!) {
        loginUser(email: $email, password: $password) {
            token
            user {
                _id
                username
                }
            }
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
    mutation lessonValidate($answerData: answerInput!) {
        lessonValidate(answerData: $answerData) {
            isValidated     
        }
    }
`
export const ADD_MESSAGE = gql`
  mutation addMessage($messageText: String!) {
    addMessage(messageText: $messageText) {
      _id
      messageText
      messageAuthor
      createdAt
    }
  }
`;