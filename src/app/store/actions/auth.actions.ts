import { createAction, props } from '@ngrx/store'
import { User } from '../../core/models/user.model'

export const loginAction = createAction('[Auth] login',props<{user:User}>())

export const downloadDefaultUserAction = createAction('[Auth] download',props<{user:User}>())

export const isUserAuthenticatedAction = createAction('[Auth] check',props<{isAuthenticated:boolean}>())

export const logoutUserAction = createAction('[Auth] logout')

