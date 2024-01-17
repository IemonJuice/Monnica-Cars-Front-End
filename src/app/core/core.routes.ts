import {Routes} from "@angular/router";
import {canActivateWithUserGuard} from "./guards/can-activate-with-user.guard";

export const routes:Routes = [
  {
    path:'main',loadChildren:() => import('./pages/main-page/main-page.module').then(m => m.MainPageModule)
  },
  {
    path:'account',canActivate:[canActivateWithUserGuard], loadChildren: () => import('./pages/account-page/account-page.module').then(m => m.AccountPageModule)
  },
  {
    path:'catalog',canActivate:[canActivateWithUserGuard], loadChildren: () => import('./pages/catalog-page/catalog-page.module').then(m => m.CatalogPageModule)
  },
  {
    path:'checkout',canActivate:[canActivateWithUserGuard], loadChildren: () => import('./pages/checkout-page/checkout-page.module').then(m => m.CheckoutPageModule)
  },
  {
    path:'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'**',redirectTo:'main',pathMatch:'full'
  },
]
