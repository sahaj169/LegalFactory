import {
  ADMIN_REQUEST,
  ADMIN_FAILURE,
  ADMIN_SUCCESS,
  CLEAR_DATA,
  CLOSE_DIALOG
} from "../Constants/actionTypes";

export const adminReducer = (
  state = { adminList: null, isLoading: true , isOpen: true},
  action
) => {
  switch (action.type) {
    case ADMIN_REQUEST:
      return { ...state, isLoading: true };
    case ADMIN_SUCCESS:
      return { ...state, adminList: action.payload, isLoading: false };
    case ADMIN_FAILURE:
      return { ...state, isLoading: false };
    case CLEAR_DATA:
      return { ...state, adminList: null, isLoading: false };
    case CLOSE_DIALOG:
      return {isOpen: !state.isOpen}
    default:
      return state;
  }
};
