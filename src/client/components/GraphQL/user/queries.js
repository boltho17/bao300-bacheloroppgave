import gql from 'graphql-tag';

export const GET_USER_WITH_EMAIL = gql`    
        query ($userEmail: String!) {
            user(where: {
                email: $userEmail,
            }) {
                id
                email
                customer {
                    firstName
                    lastName
                }
                vendor {
                    displayName
                }
            }
        }
`;



