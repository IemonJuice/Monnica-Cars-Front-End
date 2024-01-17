import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CheckoutItemComponent } from './components/checkout-item/checkout-item.component';
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    CheckoutComponent,
    CheckoutItemComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports:[CheckoutComponent]
})
export class CheckoutModule { }
