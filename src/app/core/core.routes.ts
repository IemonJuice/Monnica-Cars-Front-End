import {Routes} from "@angular/router";

export const routes:Routes = [
  {
    path:'main',loadChildren:() => import('./pages/main-page/main-page.module').then(m => m.MainPageModule)
  },
  {
    path:'account', loadChildren: () => import('./pages/account-page/account-page.module').then(m => m.AccountPageModule)
  },
  {
    path:'catalog', loadChildren: () => import('./pages/catalog-page/catalog-page.module').then(m => m.CatalogPageModule)
  },
  {
    path:'checkout', loadChildren: () => import('./pages/checkout-page/checkout-page.module').then(m => m.CheckoutPageModule)
  },
  {
    path:'**',redirectTo:'main',pathMatch:'full'
  },
]
