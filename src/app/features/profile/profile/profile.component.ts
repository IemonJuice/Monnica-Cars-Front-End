import { Component, inject, OnDestroy, OnInit } from '@angular/core'
import { AuthService } from '../../auth/services/auth.service'
import { Profile } from '../../../core/models/profile.model'
import { Observable } from 'rxjs'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { UsersService } from '../../users/services/users.service'
import { Store } from '@ngrx/store'
import { StateModel } from '../../../store/models/state.model'


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit, OnDestroy {
  profile?: Observable<Profile>
  isEditingMode: boolean = false
  store: Store<{ user: StateModel }> = inject(Store<{ user: StateModel }>)

  profileForm: FormGroup = inject(FormBuilder).group({
    id: ['', Validators.required],
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    age: ['', [Validators.required, Validators.min(18)]],
    gender: ['', Validators.required]
  })

  resetPasswordForm: FormGroup = inject(FormBuilder).group({
    userId: ['', Validators.required],
    newPassword: ['', [Validators.required, Validators.min(8)]],
    oldPassword: ['', [Validators.required, Validators.min(8)]]
  })
  successPasswordChanging: boolean = false

  isFailServerPasswordChanging: boolean = false
  serverErrorMessage: string = ''

  constructor(private authService: AuthService, private usersService: UsersService) {
  }

  ngOnInit() {

    this.profile = this.authService.getProfile()
    this.profileForm.get('username')?.disable()
    this.profileForm.get('email')?.disable()
    this.profileForm.get('gender')?.disable()
    this.profileForm.get('age')?.disable()
    this.authService.getProfile().subscribe(profile => {

      this.profileForm.get('username')?.setValue(profile.data.profile.username)
      this.profileForm.get('email')?.setValue(profile.data.profile.email)
      this.profileForm.get('gender')?.setValue(profile.data.profile.gender)
      this.profileForm.get('age')?.setValue(profile.data.profile.age)
      this.profileForm.get('id')?.setValue(profile.data.profile.id)
      this.resetPasswordForm.get('userId')?.setValue(profile.data.profile.id)
    })
  }

  changeEditingModeToOpposite() {

    this.profileForm.get('username')?.enable()
    this.profileForm.get('email')?.enable()
    this.profileForm.get('password')?.enable()
    this.profileForm.get('gender')?.enable()
    this.profileForm.get('age')?.enable()
    this.isEditingMode = !this.isEditingMode

  }

  saveForm() {

    if (this.profileForm.valid) {
      this.profile = this.usersService.changeUserInfo(this.profileForm.getRawValue())
      this.isEditingMode = !this.isEditingMode
      this.profileForm.get('username')?.disable()
      this.profileForm.get('email')?.disable()
      this.profileForm.get('gender')?.disable()
      this.profileForm.get('age')?.disable()
    }
  }

  resetPassword() {
    const oldPassword: string = this.resetPasswordForm.get('oldPassword')?.getRawValue()
    const newPassword: string = this.resetPasswordForm.get('newPassword')?.getRawValue()
    const userId: number = this.resetPasswordForm.get('userId')?.getRawValue()
    if (this.resetPasswordForm.valid) {

      this.usersService.resetPassword(userId, oldPassword, newPassword).subscribe({
        next: () => {
          this.successPasswordChanging = true
          setTimeout(() => {
            this.successPasswordChanging = false
          }, 3000)
        },
        error: (err) => {
          this.isFailServerPasswordChanging = true
          this.serverErrorMessage = err.message
          setTimeout(() => {
            this.isFailServerPasswordChanging = false
          }, 3000)
        }
      })
    }
  }

  ngOnDestroy(): void {}

}
