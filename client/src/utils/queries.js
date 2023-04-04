import { gql } from "@apollo/client";

export const LISTEDITEM = gql`
  query ListedItems {
    listedItems {
      _id
      description
      iconURL
      title
      userEmail
    }
    users {
      email
    }
  }
`;

