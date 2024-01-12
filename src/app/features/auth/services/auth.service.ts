import { inject, Injectable } from '@angular/core'
import { Apollo } from 'apollo-angular'
import { HttpHeaders } from '@angular/common/http'
import { CookieService } from 'ngx-cookie-service'
import { registerUser } from '../../../core/graphql/mutations/user-register.mutation'
import { UserToRegister } from '../../../core/models/user-to-register.model'
import { UserToLogin } from '../../../core/models/user-to-login.model'
import { loginUser } from '../../../core/graphql/queries/user-login.query'
import { getProfile } from '../../../core/graphql/queries/user-profile.query'
import { resetPassword } from '../../../core/graphql/mutations/reset-password.mutation'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apollo: Apollo = inject(Apollo)
  private cookieService: CookieService = inject(CookieService)


  getHeaders(): HttpHeaders {
    const token = this.cookieService.get('token')
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
  }

  register(user: UserToRegister) {
    return this.apollo.mutate({
      mutation: registerUser(user)
    })
  }

  login(user: UserToLogin) {
    return this.apollo.watchQuery<any>({
      query: loginUser(user)
    }).valueChanges
  }

  getProfile() {
    return this.apollo.watchQuery<any>({
      query: getProfile(),
      context: {
        headers: this.getHeaders()
      }
    }).valueChanges
  }

  resetPassword(userId: number, oldPassword: string, newPassword: string) {
    return this.apollo.mutate({
      mutation: resetPassword(userId, oldPassword, newPassword)
    })
  }
}



