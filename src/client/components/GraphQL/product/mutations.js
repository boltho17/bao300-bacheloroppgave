import gql from 'graphql-tag';

export const ADD_PRODUCT = gql`
    mutation CreateProduct ($title: String!, $flavorProfile: String, $description: String!, $info: String!, $vendorEmail: String!, $countryName: String!) {
        createProduct(data: {
            title: $title,
            flavorProfile: $flavorProfile,
            description: $description,
            info: $info,
            published: true,
            productImagesID: {
                create: [
                    {image: "image01"},
                    {image: "image02"},
                    {image: "image03"},
                    {image: "image04"},
                    {image: "image05"}
                ]
            },
            vendorID: {
                connect: {
                    email: $vendorEmail
                }
            },
            countryID: {
                create: {
                    name: $countryName
                }
            }
        })
    }
`;
