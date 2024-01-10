import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CatalogPageComponent} from "./catalog-page.component";
import {RouterModule} from "@angular/router";
import {routes} from "./catalog-page.routes";
import {FeaturesModule} from "../../../features/features.module";



@NgModule({
  declarations: [CatalogPageComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FeaturesModule
    ],
  exports:[CatalogPageComponent,RouterModule]
})
export class CatalogPageModule { }
