import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

export const GET_USERS = gql`
  {
    users {
      id
      firstName
      lastName
      email
    }
  }
`;

export const GET_PRODUCTS = gql`
  {
    products {
      id
      name
      price
      weight
      
    }
  }
`;
