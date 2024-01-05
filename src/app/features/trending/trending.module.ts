import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrendingComponent } from './components/trending/trending.component';



@NgModule({
    declarations: [
        TrendingComponent
    ],
    exports: [
        TrendingComponent
    ],
    imports: [
        CommonModule
    ]
})
export class TrendingModule { }
