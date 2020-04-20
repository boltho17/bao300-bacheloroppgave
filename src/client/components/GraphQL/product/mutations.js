import gql from 'graphql-tag';

export const ADD_PRODUCT = gql`
    mutation CreateProduct ($title: String, $flavorProfile: String, $descriptionShort: String, $descriptionLong: String, $id: ID, $countryName: String!, $skus: [SKUCreateWithoutProductInput!]!) {
        createProduct(data: {
            title: $title,
            flavorProfile: $flavorProfile,
            descriptionShort: $descriptionShort,
            descriptionLong: $descriptionLong,
            published: true,
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
            productImages: {
                create: [
                    {image: "img_01.jpg"},
                    {image: "img_02.jpg"},
                ]
            }
        }) {
            id
            title
        }
    }
`;
