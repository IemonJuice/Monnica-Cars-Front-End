import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NavbarModule } from './navbar/navbar.module'
import { HeroModule } from './hero/hero.module'
import { TrendingModule } from './trending/trending.module'
import { FooterComponent } from './footer/components/footer/footer.component'
import { CatalogModule } from './catalog/catalog.module'
import { CarDescriptionModule } from './car-description/car-description.module'
import { AuthModule } from './auth/auth.module'
import { ProfileModule } from './profile/profile.module'
import { UsersModule } from './users/users.module'
import { CheckoutModule } from './checkout/checkout.module'


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
    ProfileModule,
    UsersModule,
    CheckoutModule
  ],
  exports: [
    NavbarModule,
    HeroModule,
    TrendingModule,
    FooterComponent,
    CatalogModule,
    AuthModule,
    ProfileModule,
    UsersModule,
    CheckoutModule
  ]
})
export class FeaturesModule {
}
