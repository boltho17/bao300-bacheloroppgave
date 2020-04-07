import gql from 'graphql-tag';

export const GET_VENDOR_WITH_EMAIL = gql`
    query GetVendorWithEmail($email: String!) {
        vendors(where: {
            user: {
                email: $email
            },
        }) {
            id
            displayName
            organizationNumber
        }
    }
`;

