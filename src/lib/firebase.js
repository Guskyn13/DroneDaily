import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/storage"
import "firebase/firestore";
import "firebase/database"

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
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const storage = firebase.storage();

export { FieldValue, firebase, timestamp, storage }