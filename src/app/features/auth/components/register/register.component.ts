import { Component, inject, OnDestroy } from '@angular/core'
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnDestroy {

  private authService: AuthService =  inject(AuthService)
  private router: Router = inject(Router);

  hasServerError: boolean = false
  serverErrorMessage: String = ''
  registerSubscription: Subscription | undefined
  isHintVisible: boolean = false
  countToRedirect: number = 3

  form: FormGroup = inject(FormBuilder).group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.min(8)]],
    age: ['',[Validators.required,Validators.min(18)]],
    email: ['',[Validators.required,Validators.email]],
    gender: ['',Validators.required]
  })


  async register(dialog: HTMLDialogElement) {
    if (this.form.invalid) {
      this.isHintVisible = true
      return
    }
    this.registerSubscription = this.authService.register(this.form.getRawValue()).subscribe({
      next: () => {
        dialog.showModal();
        this.hasServerError = false
        let interval = setInterval(() => {
          if (this.countToRedirect === 1) {
            clearInterval(interval)
            this.router.navigate(['/auth/login'])
          }
          this.countToRedirect--
        }, 1000)
      },
      error: (err) => {
        this.hasServerError = true
        this.serverErrorMessage = err.message
      }
    })
  }

  ngOnDestroy() {
    this.registerSubscription?.unsubscribe()
  }
}
