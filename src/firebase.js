import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBiRpp9ZZPv_7U_SYV7BZ0ngOXVM3VCHxM",
    authDomain: "crud-f37cc.firebaseapp.com",
    projectId: "crud-f37cc",
    storageBucket: "crud-f37cc.appspot.com",
    messagingSenderId: "791361198705",
    appId: "1:791361198705:web:75bdd6db26c15cf32e59d0"
  }

  export const firebaseApp = firebase.initializeApp(firebaseConfig)

