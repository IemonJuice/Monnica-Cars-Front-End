import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AccountPageComponent} from "./account-page.component";
import {RouterModule} from "@angular/router";
import {routes} from "./account-page.routes";
import { FeaturesModule } from '../../../features/features.module'



@NgModule({
  declarations: [AccountPageComponent],
  imports: [
    CommonModule,
    FeaturesModule,
    RouterModule.forChild(routes)
  ],
  exports:[AccountPageComponent]
})
export class AccountPageModule { }
