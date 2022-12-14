// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app";
import "firebase/auth";

// firebase dan olingan kod
const config = firebase.initializeApp({
  apiKey: "AIzaSyBzyqms-w61W2-mL1fWrueaSenYhDsqUpk",
  authDomain: "netflixclonetutorialauth.firebaseapp.com",
  projectId: "netflixclonetutorialauth",
  storageBucket: "netflixclonetutorialauth.appspot.com",
  messagingSenderId: "706141484387",
  appId: "1:706141484387:web:5fbc2526861b12b9b9cf56",
  measurementId: "G-NVPG5D7ZM6",
});

// auth qilish uchun
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider(); // google auth uchun
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default config;
