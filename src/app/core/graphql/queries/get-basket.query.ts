import {gql} from "apollo-angular";


export const getCheckout = () => {
  return gql`
    query Profile {
      profile {
        basket {
          id
          HP
          rating
          model
          price
          releaseDate
          imagesUrl {
            id
            imageUrl
          }
        }
      }
    }
  `;
}

