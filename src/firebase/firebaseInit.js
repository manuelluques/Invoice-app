import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAwQxxMl-8Z3WDyXy9bL6c0of3cz9wvqSE",
  authDomain: "invoice-app-a3821.firebaseapp.com",
  projectId: "invoice-app-a3821",
  storageBucket: "invoice-app-a3821.appspot.com",
  messagingSenderId: "563567995463",
  appId: "1:563567995463:web:971d139d91f6bd25071f62",
  measurementId: "G-FVGP10GD07"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
