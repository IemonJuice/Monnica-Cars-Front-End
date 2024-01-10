import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarDescriptionComponent } from './components/car-description/car-description.component';
import {CarDescriptionService} from "./services/car-description.service";



@NgModule({
  declarations: [
    CarDescriptionComponent
  ],
  providers: [CarDescriptionService],
  exports: [
    CarDescriptionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CarDescriptionModule { }
