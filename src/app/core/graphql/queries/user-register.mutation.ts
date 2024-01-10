
import {gql} from "apollo-angular";
import { UserToRegister } from '../../models/user-to-register.model'

export const registerUser = (user:UserToRegister) => {
  return gql`
    mutation Register {
      register(user: "${user}") {
        token
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
  `;
}
