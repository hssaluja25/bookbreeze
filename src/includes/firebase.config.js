import { initializeApp } from "firebase/app";
import { deleteUser, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBx2nI_6k1J3svin-Sndcs7vywZngMqi_4",  
    authDomain: "library-management-8eed5.firebaseapp.com",
    projectId: "library-management-8eed5",
    storageBucket: "library-management-8eed5.appspot.com",
    messagingSenderId: "797468991709",
    appId: "1:797468991709:web:633f07842d1d7c191bfb34"
  };
initializeApp(firebaseConfig);
const auth = getAuth()
// 👇 Required for sign in with google
const provider = new GoogleAuthProvider();
export {
    auth, provider, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, deleteUser, signOut
}
