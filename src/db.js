import firebase from 'firebase/app'
import Vue from 'vue'
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

    esAdmin(usuario){
      if(usuario.uid== "E9dOhWXwJKSx2aQ6xBGA47u0xZP2"){
        return true;
       }
       return false;
     },

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

        Vue.notify({
          group: 'sesion',
          title: 'Has iniciado sesion correctamente',
          position: 'top center',
          text: '¡Bienvenido!'
        });

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

        Vue.notify({
          group: 'sesion',
          title: 'Has iniciado sesion correctamente',
          position: 'top center',
          text: '¡Bienvenido!'
        });
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

        Vue.notify({
          group: 'sesion',
          title: 'Has iniciado sesion correctamente',
          position: 'top center',
          text: '¡Bienvenido!'
        });
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