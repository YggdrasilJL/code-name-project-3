import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
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