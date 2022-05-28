import {
  CLIENT_REQUEST,
  CLIENT_SUCCESS,
  CLIENT_FAILURE,
} from "../Constants/actionTypes";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";


const userRef = collection(db, "Users");

export const client = () => async (dispatch) => {
  try {
    dispatch({ type: CLIENT_REQUEST });
    const userList = await getDocs(userRef);
    dispatch({ type: CLIENT_SUCCESS, payload: userList.docs });
  } catch (error) {
    dispatch({ type: CLIENT_FAILURE });
    console.log("ERROR", error);
  }
};
