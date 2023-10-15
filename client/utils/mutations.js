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