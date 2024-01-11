import { Component, inject, Input } from '@angular/core'
import { Car } from '../../../../core/models/car.model'
import { UsersService } from '../../../users/services/users.service'
import { StateModel } from '../../../../store/models/state.model'
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-checkout-item[car]',
  templateUrl: './checkout-item.component.html',
  styleUrl: './checkout-item.component.scss'
})
export class CheckoutItemComponent {
  @Input('car') car!: Car

  usersService: UsersService = inject(UsersService)
  store: Store<{ user: StateModel }> = inject(Store<{ user: StateModel }>)

  removeCarFromTheCheckoutList() {
    this.store.select('user').subscribe(user => {
      this.usersService.removeFromTheCheckout(user.user!.id, this.car.id).subscribe()
    })
  }
}
