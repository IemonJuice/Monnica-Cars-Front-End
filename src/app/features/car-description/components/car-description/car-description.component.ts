import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Params } from "@angular/router";
import {Observable } from "rxjs";
import {Car} from "../../../../core/models/car.model";
import {CarDescriptionService} from "../../services/car-description.service";

@Component({
  selector: 'app-car-description',
  templateUrl: './car-description.component.html',
  styleUrl: './car-description.component.scss'
})
export class CarDescriptionComponent implements OnInit {
  carDetails!: Observable<{data:{getCar:Partial<Car>}}>
  carsService: CarDescriptionService = inject(CarDescriptionService)
  route: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.carDetails = this.carsService.getCarById(params['id'])
    })
    this.carDetails.subscribe(d => console.log(d))
  }
}
