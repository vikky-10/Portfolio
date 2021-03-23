import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_MESSAGING_APP_ID,
  apiKey: "AIzaSyALyQS1-UU4EgnAm4pSACgTVPAk_WRkp18",
  authDomain: "react-contact-c8f48.firebaseapp.com",
  databaseURL: "https://react-contact-c8f48-default-rtdb.firebaseio.com",
  projectId: "react-contact-c8f48",
  storageBucket: "react-contact-c8f48.appspot.com",
  messagingSenderId: "443718674754",
  appId: "1:443718674754:web:59bd61671e21f0d60240db",
});
var db = firebaseApp.firestore();
export { db };
