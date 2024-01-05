import {Routes} from "@angular/router";
import {CatalogPageComponent} from "./catalog-page.component";
import {CarPageComponent} from "../car-page/car-page.component";

export const routes: Routes = [
  {
    path: '', children: [
      {
        path: '', component: CatalogPageComponent
      },
      {
        path: 'car/:id', component: CarPageComponent
      }
    ]
  },
]
