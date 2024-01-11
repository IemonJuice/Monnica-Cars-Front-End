import { gql } from 'apollo-angular'


export const addToCheckoutMutation = (userId: number, carId: number) => {
  return gql`
    mutation AddToCheckout {
      addToCheckout(userId: ${userId}, carId: ${carId}) {
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
