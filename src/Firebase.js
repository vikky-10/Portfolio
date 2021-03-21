import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyALyQS1-UU4EgnAm4pSACgTVPAk_WRkp18",
  authDomain: "react-contact-c8f48.firebaseapp.com",
  projectId: "react-contact-c8f48",
  storageBucket: "react-contact-c8f48.appspot.com",
  messagingSenderId: "443718674754",
  appId: "1:443718674754:web:59bd61671e21f0d60240db",
});
var db = firebaseApp.firestore();
export { db };
