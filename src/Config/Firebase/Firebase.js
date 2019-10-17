import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'
import 'firebase/storage'


var firebaseConfig = {
  apiKey: "AIzaSyA2orh2RC4_0Rgd6PKAvpNH9WOkh8IWIyc",
  authDomain: "foodi-home.firebaseapp.com",
  databaseURL: "https://foodi-home.firebaseio.com",
  projectId: "foodi-home",
  storageBucket: "foodi-home.appspot.com",
  messagingSenderId: "639429966953",
  appId: "1:639429966953:web:79249b58141edf7f6c76f8"
};

  // Initialize Firebase
 const firebaseApp= firebase.initializeApp(firebaseConfig);



 const provider = new firebase.auth.FacebookAuthProvider();
export{
  firebaseApp,provider
}