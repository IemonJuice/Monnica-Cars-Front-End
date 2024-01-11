import { Component, inject, OnInit } from '@angular/core'
import { CookieService } from 'ngx-cookie-service'
import { Store } from '@ngrx/store'
import { StateModel } from '../../../../store/models/state.model'
import {
  downloadDefaultUserAction,
  isUserAuthenticatedAction, loginAction,
  logoutUserAction
} from '../../../../store/actions/auth.actions'
import { Router } from '@angular/router'
import { AuthService } from '../../../auth/services/auth.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  isBurgerVisible: boolean = false
  isTokenAvailable!: boolean
  store: Store<{ user: StateModel }> = inject(Store<{ user: StateModel }>)
  router: Router = inject(Router)
  authService: AuthService = inject(AuthService)

  constructor(private cookieService: CookieService) {

  }

  ngOnInit() {
    const token = this.cookieService.get('token')
    this.store.select('user').subscribe(user => {
      this.isTokenAvailable = user.isUserLoggedIn
    })
    if (token) {
      this.authService.getProfile().subscribe(profile =>
        this.store.dispatch(downloadDefaultUserAction({user:profile.data.profile})))
    }
  }

  makeOppositeBurgerContentVisibility() {
    this.isBurgerVisible = !this.isBurgerVisible
  }

  async logout() {
    this.cookieService.delete('token')
    this.store.dispatch(logoutUserAction())
    await this.router.navigate(['main'])
  }

}
