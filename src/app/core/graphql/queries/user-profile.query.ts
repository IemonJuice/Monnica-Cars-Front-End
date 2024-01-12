import {gql} from "apollo-angular";


export const getProfile = () => {
  return gql`
    query Profile {
      profile {
        id
        email
        username
        age
        gender
        password
        avatarImageName
      }
    }
  `;
}

