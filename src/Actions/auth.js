import {
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  FORCE_REFRESH
} from "../Constants/actionTypes";
import { toast } from "react-toastify";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
const userRef = collection(db, "Users");
let isPresent = true;
let isLead = true;

export const login = (username, password, navigate) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_REQUEST });
    const data = await signInWithEmailAndPassword(auth, username, password);
    
    const userList = await getDocs(userRef);

    userList.docs
      .map((doc) => ({ ...doc.data(), id: doc.id }))
      // eslint-disable-next-line
      .map((user) => {
        if (user.Email === username && user.Type === 'Admin') {
          let authVerify = {
            token: data._tokenResponse.idToken,
            type: user.Type,
          }
          dispatch({
            type: AUTH_SUCCESS,
            payload: authVerify,
          })

          navigate('/dashboard')
        } else if (user.Email === username && user.Type === 'Client') {
          dispatch({ type: FORCE_REFRESH })
          let authVerify = {
            token: data._tokenResponse.idToken,
            type: user.Type,
            email: user.Email,
          }
          dispatch({
            type: AUTH_SUCCESS,
            payload: authVerify,
          })

          isLead = false

          navigate('/client-dashboard')
        } else if (user.Email === username && user.Type === 'Lead') {
          isPresent = false
        }
      })
    if (isPresent === false && isLead) {
      toast("YOU ARE NOT A VALID CUSTOMER");
      dispatch({ type: AUTH_FAILURE });
    }
  } catch (error) {
    toast("LOGIN NOT SUCCESSFUL");
    dispatch({ type: AUTH_FAILURE });
  }
};



export const signUp = (username, password) => async (dispatch) => {
  try {
    dispatch({ type: SIGNUP_REQUEST });
    await createUserWithEmailAndPassword(auth, username, password);
    dispatch({ type: SIGNUP_SUCCESS });
    
  } catch (error) {
    toast("User already created");
    dispatch({ type: SIGNUP_FAILURE });
  }
};


export const resetPassword = (email) => async (dispatch) => {
  try {
    await sendPasswordResetEmail(auth, email);
    toast("Please Check Your Email For Password Reset Link")
  } catch (error) {
    toast("RESET PASSWORD UNSUCCESSFUL");
  }
}

