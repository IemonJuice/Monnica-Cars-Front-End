import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {FeaturesModule} from "../../../features/features.module";
import {routes} from "./auth.routes";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeaturesModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule {
}
