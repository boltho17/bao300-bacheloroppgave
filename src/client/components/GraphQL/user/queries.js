import gql from 'graphql-tag';

export const GET_USER = gql`
    {
        query {
            post(where: {
                id: "cixnen24p33lo0143bexvr52n"
            }) {
                id
                title
                published
            }
        }
    }
`;
