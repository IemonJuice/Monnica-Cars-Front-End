import { gql } from 'apollo-angular'
import { UserToRegister } from '../../models/user-to-register.model'

export const registerUser = (user: UserToRegister) => {
  return gql`
    mutation Register {

      register(user: {
        email: "${user.email}",
        username: "${user.username}",
        age: ${user.age},
        gender:"${user.gender}"
        password: "${user.password}"
      }) {

        user {
          id
          email
          username
          age
          gender
          password
        }
      }
    }
  `
}
