import { gql } from '@apollo/client';

export const GET_ME = gql`
    query me {
        me {
            _id
            username
            savedBooks {
                bookID
                title
                description
                image
            }
        }
    }
`;

export const GET_LESSON = gql`
    query lesson($id: ID!) {
        lesson(id: $id) {
            _id
            lessonType
            question
            correctAnswer
            answers {
                body
            }
        }
    }
`