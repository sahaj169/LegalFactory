import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const submitDetailsHome = (details) => async (dispatch) => {
  try {
   await addDoc(collection(db, "Users"), details);
    
  } catch (error) {
    console.log("Error", error);
  }
};
