import { Component,  OnInit } from '@angular/core'
import { AuthService } from '../../auth/services/auth.service'
import { Profile } from '../../../core/models/profile.model'
import { Observable  } from 'rxjs'


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  profile?: Observable<Profile>
  isEditingMode:boolean = false
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.profile = this.authService.getProfile()
  }

  changeEditingModeToOpposite() {
    this.isEditingMode = !this.isEditingMode
  }
}
