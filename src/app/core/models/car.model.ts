export interface Car {
  id: number,
  HP: number,
  rating: number,
  model: string,
  price: number,
  releaseDate: string
  imagesUrl:[{ imageUrl: string, __typename: string }];
}
