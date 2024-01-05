import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CheckoutPageComponent} from "./checkout-page.component";
import {RouterModule} from "@angular/router";
import {routes} from "./checkout-page.routes";



@NgModule({
  declarations: [CheckoutPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[CheckoutPageComponent,RouterModule]
})
export class CheckoutPageModule { }
