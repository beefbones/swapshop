import { gql } from "@apollo/client";

export const LISTEDITEM = gql`
query ListedItems {
  listedItems {
    description
    title
    iconURL
  }
}`;
