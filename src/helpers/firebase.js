import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBOEF2wo1oQ-fqW6kUEe7_T80FjbVN3sE4",
  authDomain: "clone-53b4a.firebaseapp.com",
  databaseURL: "https://clone-53b4a-default-rtdb.firebaseio.com/",
  projectId: "clone-53b4a",
  storageBucket: "clone-53b4a.appspot.com",
  messagingSenderId: "998292727538",
  appId: "1:998292727538:web:3807563398c7fe145d526b",
  measurementId: "G-5PQT1J9SY0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
