import {Injectable} from '@angular/core';

import {Apollo} from "apollo-angular";
import {getCars} from "../../../core/graphql/queries/cars.query";

import {Observable} from "rxjs";
import {Car} from "../../../core/models/car.model";




@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private apollo: Apollo) {
  }

  getPaginatedCars(pageNumber: number): Observable<{ data: { getCars: Partial<Car>[] } }> {
    return this.apollo.watchQuery<any>({
      query: getCars(pageNumber),
    }).valueChanges
  }

  getFilteredCars(pageNumber: number,rating:number,priceSortingOrder?:string): Observable<{ data: { getCars: Partial<Car>[] } }> {
    return this.apollo.watchQuery<any>({
      query: getCars(pageNumber,rating,priceSortingOrder),
    }).valueChanges
  }

  getSortedByPrice(pageNumber: number,priceSortingOrder:string,rating?:number | null): Observable<{ data: { getCars: Partial<Car>[] } }> {
    if(!rating){
      rating = null;
    }
    return this.apollo.watchQuery<any>({
      query: getCars(pageNumber,rating,priceSortingOrder),
    }).valueChanges
  }


  getSpecificCars(generalCarInfo:string): Observable<{ data: { getCars: Partial<Car>[] } }> {
    return this.apollo.watchQuery<any>({
      query: getCars(1,null,null,generalCarInfo),
    }).valueChanges
  }

}
