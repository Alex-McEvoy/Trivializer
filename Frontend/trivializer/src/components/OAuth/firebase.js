import firebase from "firebase";

console.log("process.env", process.env);
const config = {
  apiKey: process.env.firebaseAPIKey, //"AIzaSyBbD4nPLGBnZXYKU7IAE5mDAj7rnD1Et3I",
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
