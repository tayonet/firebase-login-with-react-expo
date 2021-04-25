import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBtSaz7Vlkqr2V9851upN772QIQt_15pJM",
  authDomain: "rnfirebaselogin-7aa8a.firebaseapp.com",
  projectId: "rnfirebaselogin-7aa8a",
  storageBucket: "rnfirebaselogin-7aa8a.appspot.com",
  messagingSenderId: "25132059521",
  appId: "1:25132059521:web:db0b9042e8e32b5ce9f680",
  measurementId: "G-2Z929NRZNF",
};
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();
export { db, auth };
