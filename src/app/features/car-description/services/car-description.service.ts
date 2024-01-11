import { Injectable } from '@angular/core';

import {Apollo} from "apollo-angular";
import {getCar} from "../../../core/graphql/queries/full-description-car.query";
import { addToCheckoutMutation } from '../../../core/graphql/mutations/add-to-checkout.mutation'

@Injectable({
  providedIn: 'root'
})
export class CarDescriptionService {

  constructor(private apollo:Apollo) { }

  getCarById(id:number):any {
     return this.apollo.watchQuery<any>({
      query: getCar(id),
    }).valueChanges
  }

  addCarToTheCheckout(userId:number,carId:number) {
    return this.apollo.mutate({
      mutation:addToCheckoutMutation(userId,carId)
    })
  }
}
