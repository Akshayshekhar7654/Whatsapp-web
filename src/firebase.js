// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAf4KcfxK7KSkG4aF3wPcMMS9b0jHmSkxo",
    authDomain: "whats-app-clone-d19f5.firebaseapp.com",
    projectId: "whats-app-clone-d19f5",
    storageBucket: "whats-app-clone-d19f5.appspot.com",
    messagingSenderId: "692016200583",
    appId: "1:692016200583:web:eb7e03d9d44133d73db122",
    measurementId: "G-YHDMJ332QN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firebase();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;