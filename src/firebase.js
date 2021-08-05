import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA3R9j_XxigCpn-Dv8xx2oRo2-UYltfLYk",
    authDomain: "deportivasaltareact.firebaseapp.com",
    projectId: "deportivasaltareact",
    storageBucket: "deportivasaltareact.appspot.com",
    messagingSenderId: "424558314792",
    appId: "1:424558314792:web:ea790ab07ffe6d999c3c1d"
  };

  const app = firebase.initializeApp(firebaseConfig);

  export const getFirestore = () => {
      return firebase.firestore(app);
  }