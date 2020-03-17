import gql from 'graphql-tag';

export const ADD_CUSTOMER = gql`
    mutation CreateCustomer ($firstName: String!, $lastName: String!, $address: String, $userEmail: String!) {
        createCustomer(data: {
            firstName: $firstName,
            lastName: $lastName,
            address: $address,
            user: {
                create: {
                    email: $userEmail
                }
            }
        }) {
            id
            firstName
            lastName
            user {
                email
            }
        }
    }
`;
