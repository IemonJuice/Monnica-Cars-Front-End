import { Component, inject } from '@angular/core'
import { CookieService } from 'ngx-cookie-service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isBurgerVisible: boolean = false
  isTokenAvailable: boolean;
  cookieService:CookieService = inject(CookieService);
  constructor() {
    if(this.cookieService.get('token').length < 1){
      this.isTokenAvailable = false;
      return
    }
    this.isTokenAvailable = true;
    console.log(this.cookieService.get('token'))
  }

  makeOppositeBurgerContentVisibility() {
    this.isBurgerVisible = !this.isBurgerVisible;
  }

  logout() {
    this.cookieService.delete('token');
    console.log(this.cookieService.get('token'))
  }
}
