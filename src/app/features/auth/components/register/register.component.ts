import { Component, inject } from '@angular/core'
import { AuthService } from '../../services/auth.service'
import { CookieService } from 'ngx-cookie-service'
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  constructor(private authService:AuthService,private cookieService:CookieService,private router:Router) {}
  isHintVisible:boolean = false
  form: FormGroup = inject(FormBuilder).group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required,Validators.min(8)]],
    age:[''],
    email:[''],
    gender:[''],
  })



  login() {
    if(this.form.invalid){
      this.isHintVisible = true;
      return
    }
    this.authService.login(this.form.getRawValue())
      .subscribe(response => {
        this.cookieService.set('token',response.data.login.token);
        this.router.navigate(['main'])
      });

  }
}
