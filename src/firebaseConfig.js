import * as firebase from "firebase";

// firebase init goes here
const firebaseConfig = {
    apiKey: "AIzaSyA-CwBubIjp-IU8_Ky_06t2_adeB6CJXzA",
    authDomain: "football-world-cup-champions.firebaseapp.com",
    databaseURL: "https://football-world-cup-champions.firebaseio.com",
    projectId: "football-world-cup-champions",
    storageBucket: "football-world-cup-champions.appspot.com",
    messagingSenderId: "603528709309",
    appId: "1:603528709309:web:17bb4a048edb6a987ce3d4",
    measurementId: "G-6HWK8Y1E0D"
};

firebase.initializeApp(firebaseConfig)


/*
// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// firebase collections
const countries = db.collection('countries');

export {
    db,
    auth,
    currentUser,
    countries
}
*/