import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
     apiKey: "AIzaSyBNfptXLrGA5fntiLiRy4FC0dBNXpJoeA0",
     authDomain: "drone-photo-app.firebaseapp.com",
     projectId: "drone-photo-app",
     storageBucket: "drone-photo-app.appspot.com",
     messagingSenderId: "719482170893",
     appId: "1:719482170893:web:575b5f3e619a4dc7ca2f44"
};

firebase.initializeApp(firebaseConfig);
const { FieldValue } = firebase.firestore();

export { FieldValue, firebase }