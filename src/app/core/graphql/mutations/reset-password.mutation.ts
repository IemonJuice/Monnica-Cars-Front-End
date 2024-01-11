import { gql } from 'apollo-angular'

export const resetPassword = (userId: number, oldPassword: string, newPassword: string) => {
  return gql`
    mutation ResetUserPassword {
      resetUserPassword(oldPassword: "${oldPassword}", newPassword: "${newPassword}", userId: ${userId})
    }
  `
}
