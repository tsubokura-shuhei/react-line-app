import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC2UyFsLWk_ooMEDhR_wez5skOK_isui1A",
  authDomain: "line-app-react.firebaseapp.com",
  projectId: "line-app-react",
  storageBucket: "line-app-react.appspot.com",
  messagingSenderId: "406362862302",
  appId: "1:406362862302:web:17ffef251b19307fae884f",
})

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth};