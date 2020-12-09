import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBoUWbuq2Hvxx3s-GZ8irMyJQPJkhAw6N8",
    authDomain: "blog-theme-39147.firebaseapp.com",
    projectId: "blog-theme-39147",
    storageBucket: "blog-theme-39147.appspot.com",
    messagingSenderId: "561402794188",
    appId: "1:561402794188:web:522a5ea4f870b04ff07269",
    measurementId: "G-M9JTKBZ58S"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;