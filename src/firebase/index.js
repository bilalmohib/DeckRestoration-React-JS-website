import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/database'
import 'firebase/auth'
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCuRq4NYo83-NmVrUFyAVIGhWeuW2o1umE",
    authDomain: "deck-restoration-services.firebaseapp.com",
    databaseURL: "https://deck-restoration-services-default-rtdb.firebaseio.com",
    projectId: "deck-restoration-services",
    storageBucket: "deck-restoration-services.appspot.com",
    messagingSenderId: "310888293792",
    appId: "1:310888293792:web:638bf9e3b12d1e185cf0c5",
    measurementId: "G-1KHNGXS4VP"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const storage = firebase.storage();

  export {
      storage,
      firebase as default
  }