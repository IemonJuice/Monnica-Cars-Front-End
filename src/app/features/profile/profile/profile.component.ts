import {Component, inject, OnDestroy, OnInit} from '@angular/core'
import {AuthService} from '../../auth/services/auth.service'
import {Profile} from '../../../core/models/profile.model'
import {Observable} from 'rxjs'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {UsersService} from '../../users/services/users.service'
import {Store} from '@ngrx/store'
import {StateModel} from '../../../store/models/state.model'
import {FileService} from '../../file/services/file.service'


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit, OnDestroy {
  imageSrc: any;
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


  constructor(private authService: AuthService,
              private imageService: FileService,
              private usersService: UsersService) {
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
      this.getUserAvatar(profile);
    })
  }

  getUserAvatar(profile: Profile) {

    const imageName = profile.data.profile.avatarImageName
    this.imageService.getImage(imageName).subscribe(
      (data: Blob) => {
        const reader = new FileReader()
        reader.onloadend = () => {
          this.imageSrc = reader.result
        }
        reader.readAsDataURL(data)
      },
      (error) => {
        console.error('Error loading image:', error)
      }
    )
  }

  changeEditingModeToOpposite() {
    if (!this.isEditingMode) {
      this.profileForm.get('username')?.enable()
      this.profileForm.get('email')?.enable()
      this.profileForm.get('password')?.enable()
      this.profileForm.get('gender')?.enable()
      this.profileForm.get('age')?.enable()
      this.isEditingMode = !this.isEditingMode
    } else {
      this.profileForm.get('username')?.disable()
      this.profileForm.get('email')?.disable()
      this.profileForm.get('password')?.disable()
      this.profileForm.get('gender')?.disable()
      this.profileForm.get('age')?.disable()
      this.isEditingMode = !this.isEditingMode
    }
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

  uploadImage(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageSrc = reader.result;
      };
      reader.readAsDataURL(file);
    }

    if (file) {
      this.imageService.uploadImage(file).subscribe(
        (response) => {
          console.log('Image uploaded successfully:', response);
        },
        (error) => {
          console.log('Error uploading image:', error);
        }
      );
    }
  }

  ngOnDestroy(): void {
  }
}
