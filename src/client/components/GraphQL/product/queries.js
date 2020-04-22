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
            descriptionShort
            descriptionLong
            productImages {
                image
            }
            skus {
                weight
                price
            }
            grindOptions
            country {
                name
            }
            published
        }
    }
`;
