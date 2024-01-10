import { Component, inject, OnInit } from '@angular/core'
import { AuthService } from '../../auth/services/auth.service'
import { Profile } from '../../../core/models/profile.model'
import { Observable } from 'rxjs'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  profile?: Observable<Profile>
  isEditingMode: boolean = false
  profileForm: FormGroup = inject(FormBuilder).group({
    username:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    age:['',[Validators.required,Validators.min(18)]],
    gender:['',Validators.required],
  })

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.profile = this.authService.getProfile()
    this.profileForm.get('username')?.disable();
    this.profileForm.get('email')?.disable();
    this.profileForm.get('gender')?.disable();
    this.profileForm.get('age')?.disable();
    this.authService.getProfile().subscribe(profile => {
      this.profileForm.get('username')?.setValue(profile.data.profile.username)
      this.profileForm.get('email')?.setValue(profile.data.profile.email)
      this.profileForm.get('gender')?.setValue(profile.data.profile.gender)
      this.profileForm.get('age')?.setValue(profile.data.profile.age)
    })
  }

  changeEditingModeToOpposite() {

      this.profileForm.get('username')?.enable();
      this.profileForm.get('email')?.enable();
      this.profileForm.get('password')?.enable();
      this.profileForm.get('gender')?.enable();
      this.profileForm.get('age')?.enable();
    this.isEditingMode = !this.isEditingMode
  }

  saveForm() {

    this.isEditingMode = !this.isEditingMode
    this.profileForm.get('username')?.disable();
    this.profileForm.get('email')?.disable();
    this.profileForm.get('gender')?.disable();
    this.profileForm.get('age')?.disable();
  }
}
