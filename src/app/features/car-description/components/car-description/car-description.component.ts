import {Component, inject, OnDestroy, OnInit} from '@angular/core'
import {ActivatedRoute, Params} from '@angular/router'
import {combineLatest, fromEvent, Observable, Subscription, take} from 'rxjs'
import {Car} from '../../../../core/models/car.model'
import {CarDescriptionService} from '../../services/car-description.service'
import {StateModel} from '../../../../store/models/state.model'
import {Store} from '@ngrx/store'

@Component({
  selector: 'app-car-description',
  templateUrl: './car-description.component.html',
  styleUrl: './car-description.component.scss'
})
export class CarDescriptionComponent implements OnInit, OnDestroy {

  carDetails!: Observable<{ data: { getCar: Partial<Car> } }>
  carsService: CarDescriptionService = inject(CarDescriptionService)
  route: ActivatedRoute = inject(ActivatedRoute)
  store: Store<{ user: StateModel }> = inject(Store<{ user: StateModel }>)
  subscription: Subscription | undefined
  isAddedToTheCheckout: boolean = false;
  isCarAddedToTheCache: boolean = false;
  hasAlreadyAddedToTheCheckout: boolean = false;

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.carDetails = this.carsService.getCarById(params['id'])
    })
  }

  addCarToTheCheckout() {
    combineLatest([
      this.store.select('user').pipe(take(1)),
      this.carDetails.pipe(take(1))
    ]).subscribe(([user, car]) => {
      const userId = user.user?.id
      const carId = car?.data?.getCar?.id

      if (userId !== undefined && carId !== undefined) {
        this.subscription = this.carsService.addCarToTheCheckout(userId, carId).subscribe()
        if (this.isCarAddedToTheCache) {
          this.hasAlreadyAddedToTheCheckout = true;
          setTimeout(() => {
            this.hasAlreadyAddedToTheCheckout = false;
          }, 2000)
        } else {
          this.isAddedToTheCheckout = true
          setTimeout(() => {
            this.isAddedToTheCheckout = false;
          }, 2000)
        }
        this.isCarAddedToTheCache = true;
      }
    })
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
