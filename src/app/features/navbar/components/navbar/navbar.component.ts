import { Component, inject, OnInit } from '@angular/core'
import { CookieService } from 'ngx-cookie-service'
import { Store } from '@ngrx/store'
import { StateModel } from '../../../../store/models/state.model'
import { isUserAuthenticatedAction, logoutUserAction } from '../../../../store/actions/auth.actions'
import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  isBurgerVisible: boolean = false
  isTokenAvailable!: boolean;
  store: Store<{ user: StateModel }> = inject(Store<{ user: StateModel }>)
  router: Router = inject(Router)

  constructor(private cookieService: CookieService) {

  }

   ngOnInit() {
     console.log(
       this.cookieService.get('token')
     )
    const token = this.cookieService.get('token')
    this.store.select('user').subscribe(user => {
      this.isTokenAvailable = user.isUserLoggedIn
    })
    if (token) {
      this.store.dispatch(isUserAuthenticatedAction({ isAuthenticated: true }))
    }
  }

  makeOppositeBurgerContentVisibility() {
    this.isBurgerVisible = !this.isBurgerVisible
  }

  logout() {
    this.store.dispatch(logoutUserAction())
    this.cookieService.delete('token')
    this.router.navigate(['main'])
  }

}
