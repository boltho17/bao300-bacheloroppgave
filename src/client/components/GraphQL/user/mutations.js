import gql from 'graphql-tag';

export const ADD_USER = gql`
    mutation CreateUser($userEmail: String!) {
        createUser(data: {
            email: $userEmail
        }) {
            id
            email
        }
    }`;


