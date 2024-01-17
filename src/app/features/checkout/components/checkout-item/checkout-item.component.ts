import {Component, EventEmitter, inject, Input, OnInit, Output} from '@angular/core'
import {Car} from '../../../../core/models/car.model'
import {UsersService} from '../../../users/services/users.service'
import {StateModel} from '../../../../store/models/state.model'
import {Store} from '@ngrx/store'

@Component({
  selector: 'app-checkout-item[car]',
  templateUrl: './checkout-item.component.html',
  styleUrl: './checkout-item.component.scss'
})
export class CheckoutItemComponent implements OnInit {

  @Input('car') car!: Car

  usersService: UsersService = inject(UsersService)
  store: Store<{ user: StateModel }> = inject(Store<{ user: StateModel }>)
  quantity: number = 1;
  @Output() priceEmitter = new EventEmitter()

  ngOnInit(): void {
    this.priceEmitter.emit([this.car.price,'='])
  }

  removeCarFromTheCheckoutList() {
    this.store.select('user').subscribe(user => {
      this.priceEmitter.emit([this.car.price*this.quantity,'--'])
      this.usersService.removeFromTheCheckout(user.user!.id, this.car.id).subscribe()
    })
  }

  increaseQuantity() {
    this.quantity++;
    this.priceEmitter.emit([this.car.price,'+'])
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
      this.priceEmitter.emit([this.car.price,'-'])
    }
  }

}
