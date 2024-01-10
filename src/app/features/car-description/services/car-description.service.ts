import { Injectable } from '@angular/core';

import {Apollo} from "apollo-angular";
import {getCar} from "../../../core/graphql/queries/full-description-car.query";

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
}
