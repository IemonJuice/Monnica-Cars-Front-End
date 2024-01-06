import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarModule} from "./navbar/navbar.module";
import {HeroModule} from "./hero/hero.module";
import {TrendingModule} from "./trending/trending.module";
import { FooterComponent } from './footer/components/footer/footer.component';



@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    HeroModule,
    TrendingModule
  ],
    exports: [NavbarModule, HeroModule, TrendingModule, FooterComponent]
})
export class FeaturesModule { }
