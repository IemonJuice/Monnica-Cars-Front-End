import {gql} from "apollo-angular";

export const getCars = (pageNumber: number, rating?: number | null, priceSorting?: string | null,generalInfo?:string | null) => {
  if(!rating) {
    rating = null
  }
  if(!priceSorting) {
    priceSorting = null
  }
  if(generalInfo){
    return gql`
      query GetCars {
        getCars(pageNumber: ${pageNumber}, ratingFilterCriteria: ${rating}, priceSortingCriteria: "${priceSorting}", generalCarInfo: "${generalInfo}") {
          id
          HP
          rating
          model
          price
          imagesUrl {
            id
            imageUrl
          }
        }
      }
    `;
  }
  return gql`
    query GetCars {
      getCars(pageNumber: ${pageNumber}, ratingFilterCriteria: ${rating}, priceSortingCriteria: "${priceSorting}") {
        id
        HP
        rating
        model
        price
        imagesUrl {
          id
          imageUrl
        }
      }
    }
  `;
}
