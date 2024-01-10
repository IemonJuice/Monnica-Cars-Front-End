import { Injectable } from '@angular/core'
import { Apollo } from 'apollo-angular'
import { HttpHeaders } from '@angular/common/http'
import { CookieService } from 'ngx-cookie-service'
import { registerUser } from '../../../core/graphql/mutations/user-register.mutation'
import { UserToRegister } from '../../../core/models/user-to-register.model'
import { UserToLogin } from '../../../core/models/user-to-login.model'
import { loginUser } from '../../../core/graphql/queries/user-login.query'
import { getProfile } from '../../../core/graphql/queries/user-profile.query'
import { Store } from '@ngrx/store'
import { StateModel } from '../../../store/models/state.model'
import { isUserAuthenticatedAction } from '../../../store/actions/auth.actions'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apollo: Apollo, private cookieService: CookieService,private store:Store<{user:StateModel}>) {
    if(this.cookieService.get('token')){
      this.store.dispatch(isUserAuthenticatedAction({isAuthenticated:true}))
    }
  }

  private getHeaders(): HttpHeaders {
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
}



