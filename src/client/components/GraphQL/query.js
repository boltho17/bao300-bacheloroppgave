import gql from 'graphql-tag';

export const GET_PRODUCTS = gql`
    {
        products {
            id
            vendor {
                displayName
            }
            title
            flavorProfile
            description
            info
            productImages {
                id
            }
            country {
                name
            }
            published
        }
    }
`;
