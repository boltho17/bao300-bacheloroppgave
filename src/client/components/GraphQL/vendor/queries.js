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

export const GET_VENDORS = gql`
    query GetVendors {
        vendors {
            id
            organizationNumber
            displayName
            address
            city
            user {
                email
            }
        }
    }
`;

