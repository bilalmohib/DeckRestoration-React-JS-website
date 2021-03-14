import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/database'
import 'firebase/auth'
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCSJjT2AbsMsAITc_lzYrekCqk6mxRCm3g",
    authDomain: "sourcenergydecs.firebaseapp.com",
    projectId: "sourcenergydecs",
    storageBucket: "sourcenergydecs.appspot.com",
    messagingSenderId: "383395539303",
    appId: "1:383395539303:web:ad7d99e77f9746de5867c2",
    measurementId: "G-1B7RFJCWLC"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const storage = firebase.storage();

  export {
      storage,
      firebase as default
  }