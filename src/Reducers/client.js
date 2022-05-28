import {
  CLIENT_REQUEST,
  CLIENT_FAILURE,
  CLIENT_SUCCESS,
  CLEAR_DATA
} from "../Constants/actionTypes";

export const clientReducer = (
  state = { clientList: null, isLoading: true },
  action
) => {
  switch (action.type) {
    case CLIENT_REQUEST:
      return { ...state, isLoading: true };
    case CLIENT_SUCCESS:
      return { ...state, clientList: action.payload, isLoading: false };
    case CLIENT_FAILURE:
      return { ...state, isLoading: false };
    case CLEAR_DATA:
      return { ...state, clientList: null, isLoading: false };
    default:
      return state;
  }
};