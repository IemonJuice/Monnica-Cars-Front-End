import { gql } from 'apollo-angular'
import { UserChangeInfo } from '../../models/user-change-info.model'

export const userToChange = (user: UserChangeInfo) => {
  return gql`
    mutation ChangeUserInfo {
      changeUserInfo(
        user: {
          id: ${user.id}
          email: "${user.email}"
          username: "${user.username}"
          age: ${user.age}
          gender: "${user.gender}"
        }
      ) {
        id
        email
        username
        age
        gender
      }
    }
  `
}
