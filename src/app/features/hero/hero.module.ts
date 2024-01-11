import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero.component';
import { RouterLink } from '@angular/router'




@NgModule({
  declarations: [
    HeroComponent
  ],
  exports: [
    HeroComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ]
})
export class HeroModule { }
