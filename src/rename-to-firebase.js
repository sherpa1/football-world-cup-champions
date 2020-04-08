//Rename to firebase.js

import { firebase } from "@firebase/app";
import "@firebase/firestore";

const firebaseApp = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};

firebase.initializeApp(firebaseApp);

export const db = firebase.firestore();