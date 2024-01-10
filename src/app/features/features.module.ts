import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarModule} from "./navbar/navbar.module";
import {HeroModule} from "./hero/hero.module";
import {TrendingModule} from "./trending/trending.module";
import { FooterComponent } from './footer/components/footer/footer.component';
import {CatalogModule} from "./catalog/catalog.module";
import {CarDescriptionModule} from "./car-description/car-description.module";
import {AuthModule} from "./auth/auth.module";
import { ProfileModule } from './profile/profile.module'



@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    CatalogModule,
    HeroModule,
    TrendingModule,
    CarDescriptionModule,
    AuthModule,
    ProfileModule
  ],
    exports: [NavbarModule, HeroModule, TrendingModule, FooterComponent,CatalogModule,AuthModule,ProfileModule]
})
export class FeaturesModule { }
