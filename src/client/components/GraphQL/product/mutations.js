import gql from 'graphql-tag';

export const ADD_PRODUCT = gql`
    mutation CreateProduct ($title: String, $flavorProfile: String, $description: String, $info: String, $id: ID, $countryName: String!) {
        createProduct(data: {
            title: $title,
            flavorProfile: $flavorProfile,
            description: $description,
            info: $info,
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
            }
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
