import { createAction } from "../../reducer/reducer.utils";
import { USER_ACTION_TYPES } from "./user.types";

const setCurrentUser = (user) => {
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
};
