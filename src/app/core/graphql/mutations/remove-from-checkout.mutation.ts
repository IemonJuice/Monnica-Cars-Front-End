import { gql } from 'apollo-angular'


export const removeFromTheCheckout = (userId: number, carId: number) => {
  return gql`
    mutation R {
      removeFromTheCheckout(userId: ${userId}, carId: ${carId}) {
        id
        HP
        rating
        model
        price
        releaseDate
      }
    }
  `
}
