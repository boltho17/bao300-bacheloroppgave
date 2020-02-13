import gql from 'graphql-tag';

export const ADD_PRODUCT = gql`
    mutation AddProduct ($title: String!, $flavorProfile: String!, $description: String!, $info: String!, $vendorId: ID!, $countryId: ID!) {
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
                    id: $vendorId
                }
            },
            countryID: {
                connect: {
                    id: $countryId
                }
            }
        })
    }
`;
