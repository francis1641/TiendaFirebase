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

    crearUsuario(correo,contra) {
      let email = correo;
      let password = contra;
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          let user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          let errorCode = error.code;
          let errorMessage = error.message;
          console.log(errorCode, errorMessage); 
        });
    },


    loginCorreo(correo, contra){

        let email = correo;
        let password = contra;
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
        let user = userCredential.user;
        console.log(user);
        })
      .catch(function(error){
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
      console.log(errorCode, errorMessage, email, credential);
      })
    },


    loginGoogle() {
      const providerGoogle = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(providerGoogle)
      .then(function(result) {
        let user= result.user;
        console.log(user);
      })
      .catch(function(error){
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
        console.log(errorCode, errorMessage, email, credential);
        })
    },

    loginFacebook(){
      const providerFacebook = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithPopup(providerFacebook)
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

const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }

db.settings({ timestampsInSnapshots: true })