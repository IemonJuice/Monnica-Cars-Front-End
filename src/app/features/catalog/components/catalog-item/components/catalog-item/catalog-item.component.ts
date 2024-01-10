import {Component, inject, Input} from '@angular/core';
import {Car} from "../../../../../../core/models/car.model";
import {Router} from "@angular/router";


@Component({
  selector: 'app-catalog-item[car]', // <--- trick to use ! with @Input()
  templateUrl: './catalog-item.component.html',
  styleUrl: './catalog-item.component.scss'
})
export class CatalogItemComponent   {
  @Input() car!: Partial<Car>
  router:Router = inject(Router)
  async moveToFullDescriptionPage() {
    await this.router.navigate([`/car/${this.car.id}`])
  }
}
