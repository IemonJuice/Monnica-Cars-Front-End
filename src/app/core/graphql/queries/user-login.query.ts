import { UserToLogin } from '../../models/user-to-login.model'
import {gql} from "apollo-angular";


export const loginUser = (user:UserToLogin) => {
  return gql`
    query Login {
      login(loginCredentials: { username: "${user.username}", password: "${user.password}" }) {
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

