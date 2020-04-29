import gql from 'graphql-tag';

export const ADD_VENDOR = gql`
    mutation CreateVendor ($displayName: String!, $organizationNumber: Int!, $address: String!, $city: String, $contactPerson: String!, $userEmail: String!, $stripeId: String!) {
        createVendor(data: {
            displayName: $displayName,
            organizationNumber: $organizationNumber,
            address: $address,
            city: $city,
            contactPerson: $contactPerson,
            stripeId: $stripeId,
            user: {
                create: {
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


