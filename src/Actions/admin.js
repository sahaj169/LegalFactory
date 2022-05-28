import {
  ADMIN_REQUEST,
  ADMIN_FAILURE,
  ADMIN_SUCCESS,
} from "../Constants/actionTypes";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebaseConfig";
import { toast } from "react-toastify";

const userRef = collection(db, "Users");

export const admin = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_REQUEST });
    const userList = await getDocs(userRef);
    dispatch({ type: ADMIN_SUCCESS, payload: userList.docs });
  } catch (error) {
    dispatch({ type: ADMIN_FAILURE });
    console.log("ERROR", error);
  }
};


export const updateCollection = (columnId,email, name, data, status, city, phoneNumber, payment,paymentLink,lastupdated) => async (dispatch) => {
    try {
      const userList = await getDocs(userRef);
      userList.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }))
        // eslint-disable-next-line
        .map((user) => {
          if (user.Email === email && user.id === columnId) {
            // deleteDoc(doc(db, "Users", user.id))
            const userDoc = doc(db, 'Users', user.id)

            const updateData = {
              Name: name,
              Type: data,
              Status: status,
              City: city,
              Phone: phoneNumber,
              PaymentLink: paymentLink,
              Payment: payment,
              LastModified: lastupdated,
            }
            updateDoc(userDoc, updateData)
          }
        })
    } catch (error) {
      toast("Can't Update the document");
      console.log("ERROR", error);
    }
  };

export const deleteCollection = (email,id) => async (dispatch) => {
  try {
    const userList = await getDocs(userRef);
    userList.docs
      .map((doc) => ({ ...doc.data(), id: doc.id }))
      // eslint-disable-next-line
      .map((user) => {
        if (user.Email === email && user.id === id) {
          deleteDoc(doc(db, 'Users', user.id))
        }
      })
  } catch (error) {
    toast("Can't Delete the document");
    console.log("ERROR", error);
  }
};

