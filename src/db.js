import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAHOYdhQv7fl8LpNE_nd2hcVNvfWKNKTfg",
  authDomain: "tiendafirebase-b7020.firebaseapp.com",
  projectId: "tiendafirebase-b7020",
  storageBucket: "tiendafirebase-b7020.appspot.com",
  messagingSenderId: "360754765868",
  appId: "1:360754765868:web:c8f662311ba0e63cffb189",
  measurementId: "G-7QSGXCWC6B"
};

// Get a Firestore instance
export const db = firebase
  .initializeApp( firebaseConfig )
  .firestore()

  export default {
    auth: firebase.auth(),
    login() {
      const provider = new firebase.auth.GoogleAuthProvider();
 /*     LOGIN CON FACEBOOK    NO FUNCIONA      MAL
      var provider1 = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithPopup(provider1)
      .then(function(result) {
        console.log(result);
      })
*/
      firebase.auth().signInWithPopup(provider)
      .then(function(result) {
        console.log(result);
      })
      .catch(function(error){
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
        console.log(errorCode, errorMessage, email, credential);
        })
    },
    logout() {
      firebase.auth().signOut()
      .then(function() {})
      .catch(function(error) {
        console.log(error)});
    }
}


// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }

// if using Firebase JS SDK < 5.8.0
db.settings({ timestampsInSnapshots: true })