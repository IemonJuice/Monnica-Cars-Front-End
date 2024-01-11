import { StateModel } from './state.model'

export const initialState: StateModel = {
  user: {
    username: '',
    age: 0,
    gender: '',
    email: '',
    id: 0
  },
  isUserLoggedIn: false
}

