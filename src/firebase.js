import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWRZjPbE0egCI-ch6yuRwwUfVz1VvFy44",
  authDomain: "text-analyzer-7ad51.firebaseapp.com",
  projectId: "text-analyzer-7ad51",
  storageBucket: "text-analyzer-7ad51.appspot.com",
  messagingSenderId: "903119730099",
  appId: "1:903119730099:web:a1cdac09020e707d4687c6",
};

export default firebase;

// initialize our firebaseapp
const firebaseApp = firebase.initializeApp(firebaseConfig);
// get the db
const db = firebaseApp.firestore();
// access to the authentication things we need
const auth = firebase.auth();
export { db, auth };
