import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CheckoutItemComponent } from './components/checkout-item/checkout-item.component';



@NgModule({
  declarations: [
    CheckoutComponent,
    CheckoutItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[CheckoutComponent]
})
export class CheckoutModule { }
