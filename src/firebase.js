import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCWiq7ZH1KbGFdlis8N6cc6BOLv-E3kQu4",
    authDomain: "carparking-aeb1e.firebaseapp.com",
    projectId: "carparking-aeb1e",
    storageBucket: "carparking-aeb1e.appspot.com",
    messagingSenderId: "23695123888",
    appId: "1:23695123888:web:d2aaf99644455ed2e36275"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();

export default db;