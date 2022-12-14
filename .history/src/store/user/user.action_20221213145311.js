import { USER_ACTION_TYPES } from "./user.types";
import { createAction } from '../../utils/reducer/reducer.utils'

export const setCurrentUser = (user) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)


// export const USER_ACTION_TYPES = {
//   SET_CURRENT_USER: "user/SET_CURRENT_USER",
//   CHECK_USER_SESSION: "user/CHECK_USER_SESSION",
//   GOOGLE_SIGN_IN_START: 'user/GOOGLE_SIGN_IN_START',
//   EMAIL_SIGN_IN_START: 'user/EMAIL_SIGN_IN_START',
//   SIGN_IN_SUCCESS: 'user/SIGN_IN_SUCCESS',
//   SIGN_IN_FAILURE: 'user/SIGN_IN_FAILURE'
// };


export const CheckUserSession = () => createAction(USER_ACTION_TYPES.CHECK_USER_SESSION)
export const googleSignInStart = () => createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START)