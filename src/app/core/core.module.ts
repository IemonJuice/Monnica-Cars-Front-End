import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PagesModule} from "./pages/pages.module";
import {RouterModule} from "@angular/router";
import {routes} from "./core.routes";



@NgModule({
  imports: [
    CommonModule,
    PagesModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class CoreModule { }
