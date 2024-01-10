import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CatalogComponent } from './components/catalog/catalog.component'
import { CatalogService } from './services/catalog.service'
import { CatalogItemComponent } from './components/catalog-item/components/catalog-item/catalog-item.component'
import { ReactiveFormsModule } from '@angular/forms'
import { FormsModule } from '@angular/forms'


@NgModule({
  providers: [CatalogService],
  declarations: [
    CatalogComponent,
    CatalogItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [CatalogComponent]
})
export class CatalogModule {
}
