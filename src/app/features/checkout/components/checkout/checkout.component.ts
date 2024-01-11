import { Component,  OnInit } from '@angular/core'
import { UsersService } from '../../../users/services/users.service'
import { Observable } from 'rxjs'
import { Car } from '../../../../core/models/car.model'


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent implements OnInit {
  checkout?: Observable<{ data: { profile: { basket: Car[] } } }>

  constructor(private usersService: UsersService,) {}

  ngOnInit(): void {
      this.checkout = this.usersService.getCheckout() as Observable<{ data: { profile: { basket: Car[] } } }>;
      this.checkout.subscribe((d) => console.log(d));
  }
}
