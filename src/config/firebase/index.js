import firebase from 'firebase/app';
// import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyBn-LzMqfucscxRSIf6JsCnnS67B2WUmAA",
    authDomain: "simple-notes-a7ae1.firebaseapp.com",
    databaseURL: "https://simple-notes-a7ae1.firebaseio.com",
    projectId: "simple-notes-a7ae1",
    storageBucket: "simple-notes-a7ae1.appspot.com",
    messagingSenderId: "262537424468",
    appId: "1:262537424468:web:070c7a4195c6b1243207c1"
};

firebase.initializeApp(firebaseConfig);

export default firebase;