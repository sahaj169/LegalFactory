import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { adminReducer } from "./admin";
import { clientReducer } from "./client";

export const reducers = combineReducers({
  user: authReducer,
  admin: adminReducer,
  client: clientReducer,
});
