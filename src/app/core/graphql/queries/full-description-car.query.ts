import {gql} from "apollo-angular";

export const getCar = (carId:number) => {
  return gql`
    query  {
      getCar(carId: ${carId}) {
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
  `;
}
