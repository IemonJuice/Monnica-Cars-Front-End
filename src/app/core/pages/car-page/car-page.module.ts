import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CarPageComponent} from "./car-page.component";
import {RouterModule} from "@angular/router";
import {routes} from "./car-page.routes";



@NgModule({
  declarations: [CarPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[CarPageComponent,RouterModule]
})
export class CarPageModule { }
