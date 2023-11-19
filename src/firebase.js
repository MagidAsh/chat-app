import firebase from "firebase/app";
import "firebase/auth";


// We copy this object from our project that we created on the Firebase site from the config section and use it in our code.

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyB_JWZfRwKelo6hfSewZwj-xr1_BbCH6Vs",
    authDomain: "sigram-2d073.firebaseapp.com",
    projectId: "sigram-2d073",
    storageBucket: "sigram-2d073.appspot.com",
    messagingSenderId: "972725434449",
    appId: "1:972725434449:web:e655bd2face50f01be2070"
  }).auth();