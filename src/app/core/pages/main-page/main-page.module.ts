import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainPageComponent} from "./main-page.component";
import {RouterModule} from "@angular/router";
import {routes} from "./main-page.routes";
import {FeaturesModule} from "../../../features/features.module";



@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    FeaturesModule,
    RouterModule.forChild(routes)
  ],
  exports:[MainPageComponent,RouterModule]
})
export class MainPageModule { }
