import firebase from "firebase";

const config = {
  apiKey: process.env.firebaseAPIKey,
  authDomain: "trivializer-app.firebaseapp.com",
  databaseURL: "https://trivializer-app.firebaseio.com",
  projectId: "trivializer-app",
  storageBucket: "trivializer-app.appspot.com",
  messagingSenderId: "687151801757"
};

firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
