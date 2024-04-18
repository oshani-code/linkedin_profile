import firebase from "firebase/compat/app";

//import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC08hNMZ7ojpKCXoWFrEH8ePES3ct6vUcU",
    authDomain: "linkedin-44281.firebaseapp.com",
    projectId: "linkedin-44281",
    storageBucket: "linkedin-44281.appspot.com",
    messagingSenderId: "134546009356",
    appId: "1:134546009356:web:a19d4195c7ddd78e25ed29"
  };
  
  // Use this to initialize the firebase App
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  // Use these for db & auth
  export const db = firebaseApp.firestore();
//   const auth = firebase.auth();

  