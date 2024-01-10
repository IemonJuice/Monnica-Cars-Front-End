import {Component, inject} from '@angular/core';
import {CatalogService} from "../../services/catalog.service";
import {Observable} from "rxjs";
import {Car} from "../../../../core/models/car.model";

import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})
export class CatalogComponent {

  currentPage: number = 1;

  cars$: Observable<{ data: { getCars: Partial<Car>[] } }>;

  catalogService: CatalogService = inject(CatalogService)
  carForm: FormGroup = inject(FormBuilder).group({
    order: [null],
    rating: [null],
    currentPage: [this.currentPage],
  });


  constructor() {
    this.cars$ = this.catalogService.getPaginatedCars(this.currentPage)
  }

  nextPage() {
    this.catalogService.getPaginatedCars(1 + this.currentPage).subscribe(response => {
      if (response.data.getCars.length > 0) {
        ++this.currentPage;
        this.cars$ = this.catalogService.getPaginatedCars(this.currentPage)
      }
    })

  }

  previousPage() {
    if (this.currentPage > 1) {
      --this.currentPage;
      this.cars$ = this.catalogService.getPaginatedCars(this.currentPage)
    }
  }

  getFilteredByRatingCars() {
    this.cars$ = this.catalogService.getFilteredCars(
      this.currentPage,
      Number(this.carForm.getRawValue().rating),
      this.carForm.getRawValue().order)
  }

  getSortedByPriceCars() {
    this.cars$ = this.catalogService.getSortedByPrice(
      this.currentPage,
      this.carForm.getRawValue().order,
      this.carForm.getRawValue().rating);
  }
  getSpecificCars(searchingValue:string) {
    this.cars$ = this.catalogService.getSpecificCars(searchingValue);
  }
}
