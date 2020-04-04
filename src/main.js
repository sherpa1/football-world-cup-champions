import Vue from 'vue'
import App from './App.vue'
import router from './routes';
import * as firebase from "firebase";
import store from "./store";

import VueFirestore from 'vue-firestore';

// firebase init goes here
// const firebaseConfig = {
//   apiKey: "AIzaSyA-CwBubIjp-IU8_Ky_06t2_adeB6CJXzA",
//   authDomain: "football-world-cup-champions.firebaseapp.com",
//   databaseURL: "https://football-world-cup-champions.firebaseio.com",
//   projectId: "football-world-cup-champions",
//   storageBucket: "football-world-cup-champions.appspot.com",
//   messagingSenderId: "603528709309",
//   appId: "1:603528709309:web:17bb4a048edb6a987ce3d4",
//   measurementId: "G-6HWK8Y1E0D"
// };

// firebase.initializeApp(firebaseConfig);

// const db = firebaseConfig.firestore();

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});


//const firebaseconfig = require('./firebaseConfig');

Vue.config.productionTip = false
//Vue.config.silent = true

/*
// handle page reloads
let app
firebaseconfig.auth.onAuthStateChanged(user => {
  console.log(user)
  if (!app) {
    app = new Vue({
      el: '#app',
      
      render: h => h(App)
    })
  }
})
*/

Vue.use(VueFirestore);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");