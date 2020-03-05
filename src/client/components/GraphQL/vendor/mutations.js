import gql from 'graphql-tag';

export const ADD_VENDOR = gql`
    mutation CreateVendor ($displayName: String!, $organizationNumber: Int!, $address: String!, $userEmail: String!) {
        createVendor(data: {
            displayName: $displayName,
            organizationNumber: $organizationNumber,
            address: $address,
            user: {
                connect: {
                    email: $userEmail
                }
            }
        }) {
            id
            displayName
            user {
                email
            }
        }
    }
`;
