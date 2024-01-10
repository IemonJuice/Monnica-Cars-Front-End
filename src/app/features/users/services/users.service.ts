import { Injectable } from '@angular/core'
import { Apollo } from 'apollo-angular'
import { userToChange } from '../../../core/graphql/mutations/user-change-info.mutation'
import { UserChangeInfo } from '../../../core/models/user-change-info.model'
import { Observable } from 'rxjs'
import { Profile } from '../../../core/models/profile.model'

@Injectable({
  providedIn: 'root'
})
export class UsersService  {



  constructor(private apollo: Apollo) {
  }

  changeUserInfo(user: UserChangeInfo): Observable<Profile> {
    return this.apollo.mutate({
      mutation: userToChange(user)
    }) as Observable<Profile>
  }

  resetPassword() {
    //TODO  create graphql mutation in the back end and here to create reset feature
  }
}
