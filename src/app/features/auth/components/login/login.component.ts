import { Component, inject } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../../services/auth.service'
import { CookieService } from 'ngx-cookie-service'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { StateModel } from '../../../../store/models/state.model'
import { loginAction } from '../../../../store/actions/auth.actions'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  hasServerError: boolean = false
  serverErrorMessage: string = ''
  countToRedirect: number = 3

  constructor(
    private authService: AuthService,
    private cookieService: CookieService,
    private router: Router,
    private store:Store<{user:StateModel}>
  ) {
  }

  isHintVisible: boolean = false
  form: FormGroup = inject(FormBuilder).group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.min(8)]]
  })


  async login(dialog:HTMLDialogElement) {

    if (this.form.invalid) {
      this.isHintVisible = true
      return
    }

    this.authService.login(this.form.getRawValue())
      .subscribe({
        next: (response) => {

          dialog.showModal();

          this.hasServerError = false
          let interval = setInterval(() => {
            this.countToRedirect--
            if (this.countToRedirect === 0) {
              this.cookieService.set('token', response.data.login.token,undefined,'/')
              this.store.dispatch(loginAction(response.data.login.token.user))
              clearInterval(interval)
              this.router.navigate(['/account'])
            }
          }, 1000)
        },

        error: (err) => {
          this.hasServerError = true
          this.serverErrorMessage = err.message
        }
      })
  }
}
