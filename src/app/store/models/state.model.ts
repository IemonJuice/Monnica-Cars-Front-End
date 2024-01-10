import { User } from '../../core/models/user.model'

export interface StateModel {
  user:User | undefined
  isUserLoggedIn:boolean
}
