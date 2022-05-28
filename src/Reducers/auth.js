import {
  LOGOUT,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  FORCE_REFRESH
} from "../Constants/actionTypes";  

export const authReducer = (
  state = { authData: null, isLoading: false ,needsRefresh:false},
  action
) => {
  switch (action.type) {
    case AUTH_REQUEST:
    case SIGNUP_REQUEST:
      return { ...state, isLoading: true };
    case AUTH_SUCCESS:
      localStorage.setItem("access_token", JSON.stringify(action.payload));
      return { ...state, authData: action.payload, isLoading: false };
    case SIGNUP_SUCCESS:
      return { ...state, isLoading: false };
    case AUTH_FAILURE:
    case SIGNUP_FAILURE:
      return { ...state, isLoading: false };
    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null, isLoading: false };
    case FORCE_REFRESH:
      return {needsRefresh:true}
    default:
      return state;
  }
};
