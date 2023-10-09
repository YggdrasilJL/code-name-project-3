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