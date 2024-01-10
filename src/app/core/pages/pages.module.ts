import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AccountPageModule} from "./account-page/account-page.module";
import {MainPageModule} from "./main-page/main-page.module";
import {CatalogPageModule} from "./catalog-page/catalog-page.module";
import {CheckoutPageModule} from "./checkout-page/checkout-page.module";
import {CarPageModule} from "./car-page/car-page.module";
import {AuthModule} from "./auth/auth.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AccountPageModule,
    MainPageModule,
    CatalogPageModule,
    CheckoutPageModule,
    CarPageModule,
    AuthModule
  ]
})
export class PagesModule { }
