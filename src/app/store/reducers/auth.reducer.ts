import { createReducer, on } from '@ngrx/store'
import { initialState } from '../models/default-state.model'
import { isUserAuthenticatedAction, loginAction, logoutUserAction } from '../actions/auth.actions'

export const authReducer = createReducer(initialState,
  on(loginAction, (state,{ user }) => {
    return {
      user:user,
      isUserLoggedIn:true,
    }
  }),

  on(isUserAuthenticatedAction, (state,{ isAuthenticated }) => {
    return {
      ...state,
      isUserLoggedIn:isAuthenticated
    }
  }),
  on(logoutUserAction, (state) => {
    return {
      ...state,
      isUserLoggedIn:false,
    }
  })
)
