import gql from 'graphql-tag';

export const GET_PRODUCTS = gql`
    {
        products {
            id
            vendor {
                displayName
                city
            }
            title
            descriptionShort
            descriptionLong
            brewText
            productImages {
                image
            }
            skus {
                weight
                price
            }
            productImages {
                image
            }
            grindOptions
            country {
                name
                region {
                    name
                }
            }
            published
        }
    }
`;
