import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarModule} from "./navbar/navbar.module";
import {HeroModule} from "./hero/hero.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavbarModule,
    HeroModule
  ],
  exports:[NavbarModule,HeroModule]
})
export class FeaturesModule { }
