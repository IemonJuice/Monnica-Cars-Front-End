import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CarPageComponent} from "./car-page.component";
import {RouterModule} from "@angular/router";
import {routes} from "./car-page.routes";
import {FeaturesModule} from "../../../features/features.module";
import { CarDescriptionModule } from '../../../features/car-description/car-description.module'




@NgModule({
  declarations: [CarPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeaturesModule,
    CarDescriptionModule

  ],
  exports:[CarPageComponent,RouterModule]
})
export class CarPageModule { }
