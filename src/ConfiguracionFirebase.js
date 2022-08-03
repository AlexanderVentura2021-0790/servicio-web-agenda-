import firebase from "firebase/app";
import 'firebase/firestore';

var firebaseConfig = {

  apiKey: "AIzaSyBHFVqL5TwWuGEEPVNRwrGbYPXLwHy4y9s",
  authDomain: "servidor-web-agenda.firebaseapp.com",
  projectId: "servidor-web-agenda",
  storageBucket: "servidor-web-agenda.appspot.com",
  messagingSenderId: "495402242197",
  appId: "1:495402242197:web:240da11c0f1cfe5b2b0b9c"
    
  };

firebase.initializeApp(firebaseConfig);

export const baseDeDato = firebase.firestore();
export default firebase;
