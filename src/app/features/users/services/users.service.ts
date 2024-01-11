import { Injectable } from '@angular/core'
import { Apollo } from 'apollo-angular'
import { userToChange } from '../../../core/graphql/mutations/user-change-info.mutation'
import { UserChangeInfo } from '../../../core/models/user-change-info.model'
import { Observable } from 'rxjs'
import { Profile } from '../../../core/models/profile.model'
import { getCheckout } from '../../../core/graphql/queries/get-basket.query'
import { AuthService } from '../../auth/services/auth.service'
import { removeFromTheCheckout } from '../../../core/graphql/mutations/remove-from-checkout.mutation'

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  constructor(private apollo: Apollo, private authService: AuthService) {
  }

  changeUserInfo(user: UserChangeInfo): Observable<Profile> {
    return this.apollo.mutate({
      mutation: userToChange(user)
    }) as Observable<Profile>
  }

  getCheckout() {
    return this.apollo.watchQuery({
      query: getCheckout(),
      fetchPolicy: 'no-cache',
      context: {
        headers: this.authService.getHeaders()
      }
    }).valueChanges
  }

  removeFromTheCheckout(userId: number, carId: number) {
    return this.apollo.mutate({
      mutation: removeFromTheCheckout(userId, carId),
      refetchQueries: 'all'
    })
  }

  resetPassword(userId: number, oldPassword: string, newPassword: string) {
    return this.authService.resetPassword(userId, oldPassword, newPassword)
  }
}
