import gql from 'graphql-tag';

export const ADD_PRODUCT = gql`
    mutation CreateProduct ($id: ID, $title: String, $descriptionShort: String, $descriptionLong: String, $brewText: String, $beanType: String, $countryName: String!, $category: String,
        $certification: String, $elevation: String, $process: String, $roastDegree: String, $skus: [SKUCreateWithoutProductInput!], $grindOptions: [String!], $productImages: [String!]) {
        createProduct(data: {
            title: $title,
            descriptionShort: $descriptionShort,
            descriptionLong: $descriptionLong,
            brewText: $brewText,
            beanType: $beanType,
            certification: $certification,
            elevation: $elevation,
            process: $process,
            roastDegree: $roastDegree,
            published: true,
            category: {
                connect: {
                    name: $category
                }
            }
            vendor: {
                connect: {
                    id: $id
                }
            },
            country: {
                connect: {
                    name: $countryName
                }
            },
            skus: {
                create: $skus
            },
            grindOptions: {
                set: $grindOptions
            },
            productImages: {
                set: $productImages
            }
        }) {
            id
            title
        }
    }
`;
