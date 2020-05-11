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
            beanType
            certification
            elevation
            process
            roastDegree
            category {
                name
            }
            skus {
                weight
                price
            }
            productImages
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
