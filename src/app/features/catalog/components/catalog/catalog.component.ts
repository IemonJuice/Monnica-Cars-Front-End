import {Component, inject} from '@angular/core';
import {CatalogService} from "../../services/catalog.service";
import {debounce, debounceTime, interval, Observable, switchMap, throttleTime, timer} from "rxjs";
import {Car} from "../../../../core/models/car.model";

import {FormBuilder, FormGroup} from "@angular/forms";

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
    order: ["Price"],
    rating: ['Rating'],
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
    this.currentPage = 1
    this.carForm.get('currentPage')?.setValue(1)

    this.cars$ = this.catalogService.getFilteredCars(
      this.currentPage,
      Number(this.carForm.getRawValue().rating),
      this.carForm.getRawValue().order)
  }

  getSortedByPriceCars() {
    if (this.carForm.getRawValue().rating)
      this.carForm.get('rating')?.setValue('null')
    this.cars$ = this.catalogService.getSortedByPrice(
      this.currentPage,
      this.carForm.getRawValue().order,
      this.carForm.getRawValue().rating);
  }

  getSpecificCars(searchingValue: string) {
    this.currentPage = 1
    this.carForm.get('currentPage')?.setValue(1)

    this.cars$ = this.catalogService.getSpecificCars(searchingValue).pipe(
      debounceTime(500)
    );
  }
}
